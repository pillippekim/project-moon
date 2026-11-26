// 2026-11-26 설비 점검 완료 시 점검 섹션 접기 (전 공정 작업일지 공통)
//  · #safetyStatus 글자가 '점검 완료'로 바뀌는 순간 #safetySection 의 첫 번째 자식(머리글)만 남기고 나머지를 숨김 → 화면이 짧아져 작업 입력이 바로 보임
//  · 머리글을 누르면 다시 펼쳐서 판정을 고칠 수 있고, 다시 누르면 접힘. 점검이 '진행 중'으로 돌아가면(설비/날짜 변경) 자동으로 펼쳐짐
//  · 페이지 코드는 건드리지 않음: <script src="safety_collapse.js"> 한 줄만 추가하면 동작
(function () {
  var CSS = '#safetySection.sc-collapsed > *:not(:first-child){display:none !important}'
    + '#safetySection.sc-done > :first-child{background:#059669 !important;background-image:none !important;cursor:pointer}'
    + '#safetySection .sc-hint{font-size:12px;font-weight:600;opacity:.92;margin-left:10px;white-space:nowrap}';
  function init() {
    var sec = document.getElementById('safetySection'), st = document.getElementById('safetyStatus');
    if (!sec || !st) return;
    var head = sec.firstElementChild; if (!head) return;
    var style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);
    var hint = document.createElement('span'); hint.className = 'sc-hint'; head.appendChild(hint);
    var manual = null;   // null=자동, true=사용자가 접음, false=사용자가 펼침
    function isDone() { return /점검 완료|Completed|Selesai/.test(st.textContent || ''); }
    function apply() {
      var d = isDone(), c = d && (manual === null ? true : manual);
      sec.classList.toggle('sc-done', d); sec.classList.toggle('sc-collapsed', c);
      hint.textContent = d ? (c ? '▸ 눌러서 펼치기' : '▾ 접기') : '';
    }
    head.addEventListener('click', function (e) {
      if (!isDone()) return;
      if (e.target.closest && e.target.closest('button,input,select,textarea,a,label')) return;
      manual = !sec.classList.contains('sc-collapsed'); apply();
    });
    new MutationObserver(function () { manual = null; apply(); }).observe(st, { childList: true, characterData: true, subtree: true });
    window.safetyCollapse = { expand: function () { manual = false; apply(); }, collapse: function () { manual = true; apply(); }, refresh: function () { manual = null; apply(); } };
    apply();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
