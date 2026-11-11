// 공통 권한 체크 모듈
// 각 페이지 시작 부분에서 호출

const SUPABASE_URL_AG = 'https://vpaixxlhzkwtgcllimvn.supabase.co';
const SUPABASE_KEY_AG = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwYWl4eGxoemt3dGdjbGxpbXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNzk4NjMsImV4cCI6MjA5MTk1NTg2M30.V8Bj0cMbM0E2TFhklYYa7TM-vO6Fi70ctACA7uUf4Ig';

// =============================================
// 세션 토큰 공유 (2026-10-27, 보안 2단계 ② — 포털 auth_guard.js 10/23 블록과 동일)
//  · raw fetch로 Supabase REST를 부르는 페이지(inspection_round.html)가 anon key 대신
//    로그인 세션 토큰(access_token)을 Authorization에 싣도록 한다.
//  · window.agReady  : 세션 확인이 끝나면 resolve (토큰 또는 null)
//  · window.AG_TOKEN : 현재 세션 토큰 (갱신 시 onAuthStateChange로 자동 교체)
//  · window.agHeaders(extra) : {apikey, Authorization(세션 토큰, 없으면 anon)} + extra
//  · 이 클라이언트 1개를 checkPageAccess도 함께 사용
// =============================================
var _agClient = null;
function agClient() {
    if (!_agClient) _agClient = window.supabase.createClient(SUPABASE_URL_AG, SUPABASE_KEY_AG);
    return _agClient;
}
window.AG_TOKEN = null;
window.agReady = (async function () {
    try {
        // supabase-js가 auth_guard보다 늦게 로드되는 페이지 대비 (최대 3초 대기)
        for (var i = 0; i < 30 && !window.supabase; i++) { await new Promise(function (r) { setTimeout(r, 100); }); }
        if (!window.supabase) return null;
        var c = agClient();
        var s = await c.auth.getSession();
        window.AG_TOKEN = (s.data && s.data.session && s.data.session.access_token) || null;
        c.auth.onAuthStateChange(function (ev, session) {
            window.AG_TOKEN = (session && session.access_token) || null;
        });
    } catch (e) { window.AG_TOKEN = null; }
    return window.AG_TOKEN;
})();
window.agHeaders = function (extra) {
    var h = { 'apikey': SUPABASE_KEY_AG, 'Authorization': 'Bearer ' + (window.AG_TOKEN || SUPABASE_KEY_AG) };
    if (extra) { for (var k in extra) { h[k] = extra[k]; } }
    return h;
};

// 페이지별 권한 매트릭스
const PAGE_PERMISSIONS = {
  'packaging.html':   { admin: ['all'], worker: ['포장'] },
  'inspection.html':  { admin: ['all'], worker: ['검사'] },
  'cmb.html':         { admin: ['all'], worker: ['혼련(CMB)'] },
  'cutting.html':     { admin: ['all'], worker: ['재단'] },
  'coating.html':     { admin: ['all'], worker: ['도포'] },
  'postcure.html':    { admin: ['all'], worker: ['2차가류'] },
  'shot.html':        { admin: ['all'], worker: ['쇼트'] },
  'molding.html':     { admin: ['all'], worker: ['성형'] },
  'assembly.html':    { admin: ['all'], worker: ['조립'] },
  'inspection_round.html': { admin: ['all'], worker: ['공정순회'] },
  'inspection_round_viewer.html': { admin: ['all'], worker: ['공정순회'] },
  'safety_viewer.html': { admin: ['all'] },
  'data_viewer.html':       { admin: ['all'], worker: [] },
  'master_data.html':      { admin: ['생산관리팀','경영지원팀'], worker: [] },
  'docs_manager.html':  { admin: ['연구개발팀','품질관리팀','생산관리팀'], worker: [] },
  'docs_viewer.html': { admin: ['all'], worker: ['all'] },
  'users.html':       { admin: [], worker: [] }, // 슈퍼관리자만
  'audit.html':       { admin: [], worker: [] }, // 슈퍼관리자만
};

// 권한 확인 함수
async function checkPageAccess(pageFile) {
  const dbAuth = agClient(); // 2026-10-27 세션 토큰 공유 클라이언트 재사용

  const { data: { session } } = await dbAuth.auth.getSession();
  if (!session) {
    location.href = 'login.html';
    return null;
  }

  const { data: user } = await dbAuth.from('users')
    .select('*')
    .eq('auth_user_id', session.user.id)
    .single();

  if (!user) {
    alert('사용자 정보를 찾을 수 없어요.');
    await dbAuth.auth.signOut();
    location.href = 'login.html';
    return null;
  }

  // 2026-11-03 비활성(퇴사) 계정 차단 — 포털 auth_guard 와 동일 규칙 (보안 2단계 ⑥)
  if (user.active === false) {
    alert('비활성화된 계정이에요.');
    await dbAuth.auth.signOut();
    location.href = 'login.html';
    return null;
  }

  // 사용자 언어 설정 저장 (localStorage에 값이 없을 때만 DB에서 초기화)
  if (user.language && !localStorage.getItem('hkht_lang')) {
    localStorage.setItem('hkht_lang', user.language);
  }

  // 비밀번호 변경 안 했으면 변경 화면으로
  if (!user.password_changed) {
    location.href = 'change_password.html';
    return null;
  }

  // 슈퍼관리자는 모든 페이지 접근 가능
  if (user.user_type === 'super') return user;

  // 통합작업일지: 사용자별 권한(use_unified)으로 제어
  if (pageFile === 'unified.html') {
    if (user.user_type === 'admin' || user.use_unified) return user;
    showAccessDenied(user);
    return null;
  }

  // 페이지별 권한 체크
  const perm = PAGE_PERMISSIONS[pageFile];
  if (!perm) return user; // 매트릭스 없으면 통과

  let allowed = false;
  if (user.user_type === 'admin') {
    allowed = perm.admin.includes('all') || perm.admin.includes(user.department);
  } else if (user.user_type === 'worker') {
    // 기본: users 테이블의 process로 체크
    allowed = perm.worker.includes('all') || perm.worker.includes(user.process);
    
    // 복수 공정 지원: workers 테이블에 등록된 공정도 체크
    if (!allowed && user.name) {
      const { data: workerEntries } = await dbAuth.from('workers')
        .select('process')
        .eq('name', user.name)
        .eq('active', true);
      if (workerEntries) {
        const myProcesses = workerEntries.map(w => w.process);
        allowed = perm.worker.some(p => myProcesses.includes(p));
      }
    }
  }

  if (!allowed) {
    showAccessDenied(user);
    return null;
  }

  return user;
}

function showAccessDenied(user) {
  var backUrl = 'index.html';
  var backText = '← 메인으로 돌아가기';
  if (user.process === '모니터') {
    backUrl = 'https://pillippekim.github.io/work-manager/mold_layout.html';
    backText = '← 적치대 현황으로 돌아가기';
  }
  document.body.innerHTML = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f5f5;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:1rem;">
      <div style="background:white;border-radius:16px;padding:3rem 2rem;max-width:420px;width:100%;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,0.08);">
        <div style="font-size:64px;margin-bottom:1rem">🔒</div>
        <div style="font-size:20px;font-weight:600;color:#111;margin-bottom:8px">접근 권한이 없어요</div>
        <div style="font-size:13px;color:#888;line-height:1.6;margin-bottom:1.5rem">
          이 페이지는 ${user.name}님(${user.department || user.process})이<br>
          접근할 수 없어요.<br>
          <span style="font-size:11px;color:#aaa">권한이 필요하시면 관리자에게 문의해주세요.</span>
        </div>
        <button onclick="location.href='${backUrl}'"
          style="font-size:14px;padding:10px 24px;border-radius:8px;background:#243bb2;color:white;border:none;cursor:pointer;font-family:inherit;font-weight:500;">
          ${backText}
        </button>
      </div>
    </div>
  `;
}

// =============================================
// 2026-11-04 개선 요청(의견 접수) 위젯 로드 — 이 파일을 쓰는 모든 페이지 우하단에 💬 버튼 (login·change_password 는 위젯이 스스로 제외)
// =============================================
(function () {
    if (document.getElementById('fbw-loader')) return;
    var s = document.createElement('script'); s.id = 'fbw-loader'; s.src = 'feedback_widget.js?v=20261111'; s.defer = true;
    (document.head || document.documentElement).appendChild(s);
})();
