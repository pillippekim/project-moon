// 공통 권한 체크 모듈
// 각 페이지 시작 부분에서 호출

const SUPABASE_URL_AG = 'https://vpaixxlhzkwtgcllimvn.supabase.co';
const SUPABASE_KEY_AG = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwYWl4eGxoemt3dGdjbGxpbXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNzk4NjMsImV4cCI6MjA5MTk1NTg2M30.V8Bj0cMbM0E2TFhklYYa7TM-vO6Fi70ctACA7uUf4Ig';

// 페이지별 권한 매트릭스
const PAGE_PERMISSIONS = {
  'packaging.html':   { admin: ['all'], worker: ['포장'] },
  'inspection.html':  { admin: ['all'], worker: ['검사'] },
  'admin.html':       { admin: ['all'], worker: [] },
  'master.html':      { admin: ['생산관리팀','경영지원팀'], worker: [] },
  'docs_admin.html':  { admin: ['연구개발팀','품질관리팀','생산관리팀'], worker: [] },
  'docs_viewer.html': { admin: ['all'], worker: ['all'] },
  'users.html':       { admin: [], worker: [] }, // 슈퍼관리자만
};

// 권한 확인 함수
async function checkPageAccess(pageFile) {
  const dbAuth = window.supabase.createClient(SUPABASE_URL_AG, SUPABASE_KEY_AG);

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

  // 비밀번호 변경 안 했으면 변경 화면으로
  if (!user.password_changed) {
    location.href = 'change_password.html';
    return null;
  }

  // 슈퍼관리자는 모든 페이지 접근 가능
  if (user.user_type === 'super') return user;

  // 페이지별 권한 체크
  const perm = PAGE_PERMISSIONS[pageFile];
  if (!perm) return user; // 매트릭스 없으면 통과

  let allowed = false;
  if (user.user_type === 'admin') {
    allowed = perm.admin.includes('all') || perm.admin.includes(user.department);
  } else if (user.user_type === 'worker') {
    allowed = perm.worker.includes('all') || perm.worker.includes(user.process);
  }

  if (!allowed) {
    showAccessDenied(user);
    return null;
  }

  return user;
}

function showAccessDenied(user) {
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
        <button onclick="location.href='index.html'"
          style="font-size:14px;padding:10px 24px;border-radius:8px;background:#243bb2;color:white;border:none;cursor:pointer;font-family:inherit;font-weight:500;">
          ← 메인으로 돌아가기
        </button>
      </div>
    </div>
  `;
}
