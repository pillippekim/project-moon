/* ===== PM 공통 사이드바 + 상단 헤더 (JS) ===== */
/* project-moon 작업일지 페이지에서 사용 */
/* 세션5: WM 메뉴 구조와 동기화 — 이동 페이지는 WM URL로 연동 */

function initSidebar() {
    var page = location.pathname.split('/').pop() || 'index.html';

    var WM = 'https://pillippekim.github.io/work-manager/';
    var PM = 'https://pillippekim.github.io/project-moon/';

    /* ── 상단 헤더 바 ── */
    var headerEl = document.getElementById('top-header');
    if (headerEl) {
        var now = new Date();
        var days = ['일','월','화','수','목','금','토'];
        var dateStr = now.getFullYear() + '년 ' + (now.getMonth()+1) + '월 ' + now.getDate() + '일 (' + days[now.getDay()] + ')';

        headerEl.innerHTML =
            '<div class="top-header-left">' +
                '<a href="index.html" style="text-decoration:none;"><img class="top-header-logo" src="hkht_logo.png" alt="HKHT"></a>' +
                '<div class="top-header-divider"></div>' +
                '<div class="top-header-title">㈜한국하이테크</div>' +
            '</div>' +
            '<div class="top-header-right">' +
                '<div class="top-header-date">' + dateStr + '</div>' +
            '</div>';
    }

    /* ── 사이드바 ── */
    var nav = document.getElementById('sidebar-nav');
    if (!nav) return;

    nav.innerHTML =
        '<div class="menu-scroll">' +

        /* ═══ 1. 업무관리 ═══ */
        '<div class="menu-group">' +
            '<div class="menu-group-title">업무관리</div>' +

            /* 생산관리 */
            '<div class="cat-item" id="c-prod">' +
                '<button class="cat-btn" onclick="toggleCat(\'c-prod\')">' +
                    '<span class="c-icon">🏭</span><span class="c-label">생산관리</span>' +
                    '<span class="c-badge on">운영</span><span class="c-arrow">▼</span>' +
                '</button>' +
                '<div class="cat-body">' +
                    '<div class="sub-item" id="s-mold">' +
                        '<button class="sub-btn" onclick="toggleCat(\'s-mold\')">' +
                            '<span class="s-icon">🔧</span><span class="s-label">금형관리</span>' +
                            '<span class="s-badge c-badge on">1차</span><span class="s-arrow">▼</span>' +
                        '</button>' +
                        '<div class="sub-body">' +
                            '<a class="nav-link" href="' + WM + 'mold_dashboard.html"><span class="n-icon">📊</span>대시보드 / 이력</a>' +
                            '<a class="nav-link" href="' + WM + 'mold_layout.html"><span class="n-icon">🗄️</span>적치대 현황</a>' +
                            '<a class="nav-link" href="' + WM + 'mold_detail.html"><span class="n-icon">📋</span>금형 상세관리</a>' +
                        '</div>' +
                    '</div>' +
                    '<div class="sub-item disabled">' +
                        '<button class="sub-btn"><span class="s-icon">📦</span><span class="s-label">재고관리</span><span class="s-badge c-badge off">2차</span></button>' +
                    '</div>' +
                '</div>' +
            '</div>' +

            /* 품질관리 */
            '<div class="cat-item" id="c-quality">' +
                '<button class="cat-btn" onclick="toggleCat(\'c-quality\')">' +
                    '<span class="c-icon">✅</span><span class="c-label">품질관리</span>' +
                    '<span class="c-badge on">운영</span><span class="c-arrow">▼</span>' +
                '</button>' +
                '<div class="cat-body">' +
                    '<div class="sub-item" id="s-insp">' +
                        '<button class="sub-btn" onclick="toggleCat(\'s-insp\')">' +
                            '<span class="s-icon">🔬</span><span class="s-label">공정검사</span>' +
                            '<span class="s-arrow">▼</span>' +
                        '</button>' +
                        '<div class="sub-body">' +
                            '<a class="nav-link" href="inspection_round.html"><span class="n-icon">📋</span>공정검사 작성</a>' +
                            '<a class="nav-link" href="' + WM + 'inspection_round_viewer.html"><span class="n-icon">📂</span>공정검사 조회</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +

            '<div class="cat-item disabled"><button class="cat-btn"><span class="c-icon">🚚</span><span class="c-label">물류관리</span><span class="c-badge off">향후</span></button></div>' +
            '<div class="cat-item disabled"><button class="cat-btn"><span class="c-icon">🔬</span><span class="c-label">R&D</span><span class="c-badge off">향후</span></button></div>' +
            '<div class="cat-item disabled"><button class="cat-btn"><span class="c-icon">💼</span><span class="c-label">경영지원</span><span class="c-badge off">향후</span></button></div>' +
        '</div>' +

        '<div class="menu-divider"></div>' +

        /* ═══ 2. 데이터관리 ═══ */
        '<div class="menu-group">' +
            '<div class="menu-group-title">데이터관리</div>' +
            '<div class="cat-item" id="c-data">' +
                '<button class="cat-btn" onclick="toggleCat(\'c-data\')">' +
                    '<span class="c-icon">📊</span><span class="c-label">데이터 관리</span>' +
                    '<span class="c-badge on">운영</span><span class="c-arrow">▼</span>' +
                '</button>' +
                '<div class="cat-body">' +
                    '<a class="nav-link" href="' + WM + 'data_viewer.html"><span class="n-icon">📊</span>데이터 조회 및 추출</a>' +
                    '<a class="nav-link" href="' + WM + 'safety_viewer.html"><span class="n-icon">🔍</span>설비 점검 조회</a>' +
                    '<a class="nav-link" href="' + WM + 'docs_manager.html"><span class="n-icon">📄</span>문서 관리</a>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '<div class="menu-divider"></div>' +

        /* ═══ 3. 현장관리 ═══ */
        '<div class="menu-group">' +
            '<div class="menu-group-title">현장관리</div>' +
            '<div class="cat-item">' +
                '<a class="cat-btn" href="' + PM + 'index.html" style="text-decoration:none;color:inherit;">' +
                    '<span class="c-icon">📝</span><span class="c-label">작업일지 프로그램</span><span class="c-badge on">바로가기</span>' +
                '</a>' +
            '</div>' +
        '</div>' +

        '<div class="menu-divider"></div>' +

        /* ═══ 4. 시스템 ═══ */
        '<div class="menu-group">' +
            '<div class="menu-group-title">시스템</div>' +
            '<div class="cat-item" id="c-system">' +
                '<button class="cat-btn" onclick="toggleCat(\'c-system\')">' +
                    '<span class="c-icon">⚙️</span><span class="c-label">시스템 관리</span><span class="c-arrow">▼</span>' +
                '</button>' +
                '<div class="cat-body">' +
                    '<a class="nav-link" href="' + WM + 'master_data.html"><span class="n-icon">🗂️</span>기준정보 관리</a>' +
                    '<a class="nav-link" href="' + WM + 'users.html"><span class="n-icon">👥</span>사용자 관리</a>' +
                    '<a class="nav-link" href="audit.html"><span class="n-icon">📋</span>변경 이력</a>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '</div>' + /* menu-scroll 끝 */
        '<div class="menu-bottom"><a href="#">㈜한국하이테크</a></div>';
}

function toggleCat(id) {
    document.getElementById(id).classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', initSidebar);
