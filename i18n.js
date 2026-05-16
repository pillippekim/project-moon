// ═══════════════════════════════════════════════
// i18n.js — Project Moon 다국어 지원 모듈
// 지원 언어: ko(한국어), id(인도네시아어), en(영어)
// ═══════════════════════════════════════════════

const I18N = {
  // ── 공통 ──
  common: {
    submit:       { ko: '제출하기', id: 'Kirim', en: 'Submit' },
    submitting:   { ko: '제출 중...', id: 'Mengirim...', en: 'Submitting...' },
    reset:        { ko: '초기화', id: 'Reset', en: 'Reset' },
    cancel:       { ko: '취소', id: 'Batal', en: 'Cancel' },
    delete:       { ko: '삭제', id: 'Hapus', en: 'Delete' },
    save:         { ko: '저장', id: 'Simpan', en: 'Save' },
    confirm:      { ko: '확인', id: 'Konfirmasi', en: 'Confirm' },
    close:        { ko: '닫기', id: 'Tutup', en: 'Close' },
    back:         { ko: '← 메인', id: '← Menu', en: '← Main' },
    loading:      { ko: '로딩 중...', id: 'Memuat...', en: 'Loading...' },
    noData:       { ko: '데이터가 없어요.', id: 'Tidak ada data.', en: 'No data.' },
    addRow:       { ko: '+ 행 추가', id: '+ Tambah baris', en: '+ Add row' },
    required:     { ko: '필수', id: 'Wajib', en: 'Required' },

    // 날짜/시간
    workDate:     { ko: '작업 일자', id: 'Tanggal kerja', en: 'Work date' },
    startTime:    { ko: '시작시간', id: 'Waktu mulai', en: 'Start time' },
    endTime:      { ko: '종료시간', id: 'Waktu selesai', en: 'End time' },
    worker:       { ko: '작업자', id: 'Pekerja', en: 'Worker' },
    selectWorker: { ko: '선택하세요...', id: 'Pilih...', en: 'Select...' },
    note:         { ko: '비고', id: 'Catatan', en: 'Note' },
    remarks:      { ko: '특이사항', id: 'Keterangan', en: 'Remarks' },
    remarksPlaceholder: { ko: '오늘 작업 중 특이사항을 입력하세요', id: 'Masukkan keterangan hari ini', en: 'Enter today\'s remarks' },
    problem:      { ko: '문제점', id: 'Masalah', en: 'Problem' },

    // 수량
    sabun:        { ko: '사번', id: 'Kode produk', en: 'Product code' },
    productName:  { ko: '제품명', id: 'Nama produk', en: 'Product name' },
    batchNo:      { ko: 'Batch No.', id: 'Batch No.', en: 'Batch No.' },
    quantity:     { ko: '수량', id: 'Jumlah', en: 'Quantity' },
    productionQty:{ ko: '생산수량', id: 'Jumlah produksi', en: 'Production qty' },
    defectQty:    { ko: '불량수량', id: 'Jumlah cacat', en: 'Defect qty' },

    // 토스트
    saveSuccess:  { ko: '✓ 저장 완료!', id: '✓ Tersimpan!', en: '✓ Saved!' },
    saveFail:     { ko: '저장 실패', id: 'Gagal menyimpan', en: 'Save failed' },
    deleteConfirm:{ ko: '이 기록을 삭제할까요?', id: 'Hapus catatan ini?', en: 'Delete this record?' },
    deleteSuccess:{ ko: '✓ 삭제 완료', id: '✓ Terhapus', en: '✓ Deleted' },
    resetConfirm: { ko: '입력한 내용을 모두 초기화할까요?', id: 'Reset semua input?', en: 'Reset all input?' },

    // 내 제출 내역
    myHistory:    { ko: '오늘 내 제출 내역', id: 'Riwayat hari ini', en: 'My submissions today' },
    noHistory:    { ko: '오늘 제출한 내역이 없습니다.', id: 'Belum ada data hari ini.', en: 'No submissions today.' },
    totalCount:   { ko: '건', id: 'data', en: 'records' },
    submitTime:   { ko: '제출시간', id: 'Waktu kirim', en: 'Submit time' },
    action:       { ko: '작업', id: 'Aksi', en: 'Action' },

    // 접근 제한
    accessDenied: { ko: '접근 권한이 없어요', id: 'Akses ditolak', en: 'Access denied' },
    contactAdmin: { ko: '권한이 필요하시면 관리자에게 문의해주세요.', id: 'Hubungi admin untuk akses.', en: 'Contact admin for access.' },
    goMain:       { ko: '← 메인으로 돌아가기', id: '← Kembali ke menu', en: '← Back to main' },
  },

  // ── 근무구분 ──
  shift: {
    title:        { ko: '근무구분', id: 'Shift', en: 'Shift' },
    day:          { ko: '주간 (08:00~17:00)', id: 'Siang (08:00~17:00)', en: 'Day (08:00~17:00)' },
    overtime:     { ko: '잔업 (17:30~20:30)', id: 'Lembur (17:30~20:30)', en: 'Overtime (17:30~20:30)' },
  },

  // ── 설비 점검 ──
  safety: {
    title:        { ko: '일일 설비 점검 (작업 전 필수)', id: 'Pemeriksaan mesin harian (WAJIB)', en: 'Daily machine check (REQUIRED)' },
    checkItem:    { ko: '점검항목', id: 'Item periksa', en: 'Check item' },
    verdict:      { ko: '판정', id: 'Hasil', en: 'Result' },
    inProgress:   { ko: '점검 진행 중', id: 'Sedang periksa', en: 'In progress' },
    completed:    { ko: '✓ 점검 완료', id: '✓ Selesai', en: '✓ Completed' },
    completeBtn:  { ko: '점검 완료 ✓', id: 'Selesai ✓', en: 'Complete ✓' },
    allNormal:    { ko: '✓ 모든 항목 정상(○)으로 자동 설정됨', id: '✓ Semua item otomatis normal (○)', en: '✓ All items auto-set to normal (○)' },
    lockedMsg:    { ko: '🔒 설비 점검 완료 후 입력 가능', id: '🔒 Isi setelah pemeriksaan selesai', en: '🔒 Complete check first' },
    unusableWarn: { ko: '사용불가(×) 항목이 있습니다! 관리자에게 보고하셨나요?', id: 'Ada item tidak layak (×)! Sudah lapor ke admin?', en: 'Unusable (×) items found! Did you report to admin?' },
    remarksPlaceholder: { ko: '설비점검 시 발견한 전체 특이사항을 입력하세요', id: 'Masukkan catatan pemeriksaan', en: 'Enter inspection remarks' },

    // 판정 기호 설명
    normal:       { ko: '○ 정상', id: '○ OK', en: '○ OK' },
    repair:       { ko: '△ 수리요망', id: '△ Perlu perbaikan', en: '△ Need repair' },
    unusable:     { ko: '× 사용불가', id: '× Tidak layak', en: '× Unusable' },
    notuse:       { ko: '│ 미가동', id: '│ Tidak beroperasi', en: '│ Not running' },
  },

  // ── 성형 전용 ──
  molding: {
    title:        { ko: '🏭 성형 작업일지', id: '🏭 Laporan Kerja Molding', en: '🏭 Molding Work Report' },
    equipSelect:  { ko: '설비 선택', id: 'Pilih mesin', en: 'Select machine' },
    dormant:      { ko: '휴면설비', id: 'Mesin nonaktif', en: 'Dormant' },
    selected:     { ko: '✓ 선택됨', id: '✓ Terpilih', en: '✓ Selected' },
    
    // 성형 조건
    conditionTitle: { ko: '성형 조건', id: 'Kondisi Molding', en: 'Molding Conditions' },
    pressure:     { ko: '성형압력 (kgf/cm²)', id: 'Tekanan (kgf/cm²)', en: 'Pressure (kgf/cm²)' },
    upperTemp:    { ko: '상판온도 (℃)', id: 'Suhu atas (℃)', en: 'Upper temp (℃)' },
    lowerTemp:    { ko: '하판온도 (℃)', id: 'Suhu bawah (℃)', en: 'Lower temp (℃)' },

    // 작업 내역
    workDetail:   { ko: '작업 내역', id: 'Detail kerja', en: 'Work details' },
    cavity:       { ko: 'C/V', id: 'C/V', en: 'C/V' },
    shotCount:    { ko: '실적판수', id: 'Shot', en: 'Shot count' },

    // 작업유형
    workType:     { ko: '작업유형', id: 'Jenis kerja', en: 'Work type' },
    typeStandard: { ko: '표준', id: 'Standar', en: 'Standard' },
    typeFirst:    { ko: '초품', id: 'Shot pertama', en: 'First shot' },
    typeMiddle:   { ko: '중품', id: 'Shot siang', en: 'After lunch' },
    typeLast:     { ko: '종품', id: 'Shot terakhir', en: 'Last shot' },

    // 비가동
    downtimeTitle:{ ko: '비가동 사유', id: 'Alasan berhenti', en: 'Downtime reason' },
    downtimeCode: { ko: '비가동 코드', id: 'Kode berhenti', en: 'Downtime code' },
    downtimeNone: { ko: '없음', id: 'Tidak ada', en: 'None' },
    downtimeMin:  { ko: '비가동 시간(분)', id: 'Waktu berhenti (menit)', en: 'Downtime (min)' },
    downtimeDetail:{ ko: '비가동 상세', id: 'Detail berhenti', en: 'Downtime detail' },
    downtimeDetailPlaceholder:{ ko: '상세 사유 입력', id: 'Masukkan alasan detail', en: 'Enter detail reason' },

    // 비가동 코드 목록
    dtRawShort:   { ko: '생지부족', id: 'Kekurangan bahan baku', en: 'Raw material shortage' },
    dtMoldChange: { ko: '금형교체', id: 'Ganti cetakan', en: 'Mold change' },
    dtMoldClean:  { ko: '금형세척', id: 'Bersihkan cetakan', en: 'Mold cleaning' },
    dtMachineErr: { ko: '설비이상', id: 'Kerusakan mesin', en: 'Machine error' },
    dtProductErr: { ko: '제품성형이상', id: 'Cacat produk', en: 'Product defect' },
    dtMoldFix:    { ko: '금형수정', id: 'Perbaikan cetakan', en: 'Mold repair' },
    dtOther:      { ko: '기타', id: 'Lainnya', en: 'Other' },
  },

  // ── 설비 점검 항목 (성형 8개) ──
  safetyItems: {
    item1: { ko: '스위치 작동 원활', id: 'Sakelar berfungsi baik', en: 'Switch operates smoothly' },
    item2: { ko: '작동유 충만', id: 'Oli cukup', en: 'Hydraulic oil full' },
    item3: { ko: '누유 여부', id: 'Ada kebocoran oli', en: 'Oil leakage check' },
    item4: { ko: '이상음 발생', id: 'Suara abnormal', en: 'Abnormal noise' },
    item5: { ko: '열판온도 작동', id: 'Suhu plat panas', en: 'Hot plate temp' },
    item6: { ko: '콘트롤 박스', id: 'Panel kontrol', en: 'Control box' },
    item7: { ko: '청결상태', id: 'Kebersihan', en: 'Cleanliness' },
    item8: { ko: '비상정지 버튼', id: 'Tombol darurat', en: 'Emergency stop' },
  },

  // ── CMB 전용 ──
  cmb: {
    title:        { ko: '🔥 혼련(CMB) 작업일지', id: '🔥 Laporan Kerja CMB', en: '🔥 CMB Work Report' },
    materialName: { ko: '재질명', id: 'Nama bahan', en: 'Material name' },
    totalWeight:  { ko: '총 투입량 (Kg)', id: 'Total berat (Kg)', en: 'Total weight (Kg)' },
    mixCount:     { ko: '배합 횟수', id: 'Jumlah campuran', en: 'Mix count' },
    batchNo:      { ko: '뱃지 No', id: 'No. Batch', en: 'Batch No.' },
    equipSelect:  { ko: '설비 선택', id: 'Pilih mesin', en: 'Select machine' },
    lotNo:        { ko: 'LOT No.', id: 'No. LOT', en: 'LOT No.' },
  },

  // ── 재단 전용 ──
  cutting: {
    title:        { ko: '✂️ 재단 작업일지', id: '✂️ Laporan Kerja Potong', en: '✂️ Cutting Work Report' },
    boxCount:     { ko: '재단박스수량(개)', id: 'Jumlah kotak', en: 'Box count' },
    totalQty:     { ko: '총재단수량(EA)', id: 'Total potong (EA)', en: 'Total cut qty (EA)' },
    scrapWeight:  { ko: '자투리 발생량(g)', id: 'Sisa potongan (g)', en: 'Scrap weight (g)' },
    sheetCount:   { ko: '장 수', id: 'Jumlah lembar', en: 'Sheet count' },
    lotNo:        { ko: '뱃지 No', id: 'No. Batch', en: 'Badge No.' },
  },

  // ── CMB 점검항목 ──
  cmbSafetyItems: {
    item1: { ko: '구동모터 이상유무', id: 'Motor penggerak normal', en: 'Drive motor check' },
    item2: { ko: '유압력 상태', id: 'Tekanan hidrolik', en: 'Hydraulic pressure' },
    item3: { ko: '냉각수 순환', id: 'Sirkulasi air pendingin', en: 'Cooling water circulation' },
    item4: { ko: '로터 상태', id: 'Kondisi rotor', en: 'Rotor condition' },
    item5: { ko: '투입구 상태', id: 'Kondisi hopper', en: 'Hopper condition' },
    item6: { ko: '온도조절기 작동', id: 'Pengatur suhu', en: 'Temp controller' },
    item7: { ko: '청결상태', id: 'Kebersihan', en: 'Cleanliness' },
    item8: { ko: '비상정지 버튼', id: 'Tombol darurat', en: 'Emergency stop' },
  },

  // ── 재단 점검항목 ──
  cuttingSafetyItems: {
    item1: { ko: '칼날 상태', id: 'Kondisi pisau', en: 'Blade condition' },
    item2: { ko: '가이드롤러 작동', id: 'Roller pemandu', en: 'Guide roller' },
    item3: { ko: '콘트롤 박스', id: 'Panel kontrol', en: 'Control box' },
    item4: { ko: '안전커버 장착', id: 'Penutup keamanan', en: 'Safety cover' },
    item5: { ko: '에어공급', id: 'Suplai udara', en: 'Air supply' },
    item6: { ko: '청결상태', id: 'Kebersihan', en: 'Cleanliness' },
    item7: { ko: '비상정지 버튼', id: 'Tombol darurat', en: 'Emergency stop' },
  },
};

// ═══════════════════════════════════════════════
// 번역 헬퍼 함수
// ═══════════════════════════════════════════════

// 현재 언어 가져오기 (localStorage에서)
function getCurrentLang() {
  return localStorage.getItem('hkht_lang') || 'ko';
}

// 번역 텍스트 가져오기: t('common', 'submit') → '제출하기' / 'Kirim' / 'Submit'
function t(section, key) {
  const lang = getCurrentLang();
  try {
    const text = I18N[section][key][lang];
    return text || I18N[section][key]['ko'] || key;
  } catch(e) {
    return key;
  }
}

// 페이지 전체 한국어 → 외국어 자동 번역 (data-i18n 없는 요소도 처리)
const AUTO_TRANSLATE = {
  // 공통 라벨
  '작업 일자': { id: 'Tanggal kerja', en: 'Work date' },
  '작업일자': { id: 'Tanggal kerja', en: 'Work date' },
  '작성일': { id: 'Tanggal', en: 'Date' },
  '요일': { id: 'Hari', en: 'Day' },
  '근무구분': { id: 'Shift', en: 'Shift' },
  '작업자': { id: 'Pekerja', en: 'Worker' },
  '시작시간': { id: 'Waktu mulai', en: 'Start time' },
  '종료시간': { id: 'Waktu selesai', en: 'End time' },
  '선택하세요...': { id: 'Pilih...', en: 'Select...' },
  '비고': { id: 'Catatan', en: 'Note' },
  '제출하기': { id: 'Kirim', en: 'Submit' },
  '↻ 초기화': { id: '↻ Reset', en: '↻ Reset' },
  '+ 행 추가': { id: '+ Tambah baris', en: '+ Add row' },
  '특이사항': { id: 'Keterangan', en: 'Remarks' },
  
  // 점검 관련
  '일일 안전 점검 (작업 전 필수)': { id: 'Pemeriksaan Keselamatan Harian (WAJIB)', en: 'Daily Safety Check (REQUIRED)' },
  '일일 설비 점검 (작업 전 필수)': { id: 'Pemeriksaan Mesin Harian (WAJIB)', en: 'Daily Machine Check (REQUIRED)' },
  '점검항목': { id: 'Item periksa', en: 'Check item' },
  '판정': { id: 'Hasil', en: 'Result' },
  '점검 진행 중': { id: 'Sedang periksa', en: 'In progress' },
  '점검 완료 ✓': { id: 'Selesai ✓', en: 'Complete ✓' },
  '✓ 점검 완료': { id: '✓ Selesai', en: '✓ Completed' },
  '✓ 모든 항목 정상(○)으로 자동 설정됨': { id: '✓ Semua item otomatis normal (○)', en: '✓ All items auto-set to normal (○)' },
  '정상': { id: 'OK', en: 'OK' },
  '수리요망': { id: 'Perlu perbaikan', en: 'Need repair' },
  '사용불가': { id: 'Tidak layak', en: 'Unusable' },
  '미가동': { id: 'Tidak beroperasi', en: 'Not running' },
  '✓ 작업 가능': { id: '✓ Bisa kerja', en: '✓ Ready to work' },
  
  // 테이블 헤더
  '사번': { id: 'Kode produk', en: 'Product code' },
  '사번\n(제품코드)': { id: 'Kode produk', en: 'Product code' },
  '제품명': { id: 'Nama produk', en: 'Product name' },
  '품명': { id: 'Nama produk', en: 'Product name' },
  '고객 품번': { id: 'No. pelanggan', en: 'Customer P/N' },
  '고객품번': { id: 'No. pelanggan', en: 'Customer P/N' },
  '수량': { id: 'Jumlah', en: 'Quantity' },
  '생산수량': { id: 'Jumlah produksi', en: 'Production qty' },
  '불량수량': { id: 'Jumlah cacat', en: 'Defect qty' },
  '포장수량': { id: 'Jumlah kemasan', en: 'Packing qty' },
  '작업수량': { id: 'Jumlah kerja', en: 'Work qty' },
  
  // 재단 전용
  '재질명': { id: 'Nama bahan', en: 'Material name' },
  '뱃지 No': { id: 'No. Batch', en: 'Badge No.' },
  '재단박스\n수량(개)': { id: 'Kotak\n(pcs)', en: 'Box\ncount' },
  '총재단\n수량(EA)': { id: 'Total\npotong', en: 'Total\ncut qty' },
  '자투리\n발생량(g)': { id: 'Sisa\n(g)', en: 'Scrap\n(g)' },
  '총 재단박스': { id: 'Total kotak', en: 'Total boxes' },
  '총 재단수량': { id: 'Total potong', en: 'Total cut qty' },
  '총 자투리': { id: 'Total sisa', en: 'Total scrap' },
  '작업 건수': { id: 'Jumlah data', en: 'Work count' },
  '선택하세요...': { id: 'Pilih...', en: 'Select...' },
  
  // CMB 전용
  '설비 선택': { id: 'Pilih mesin', en: 'Select machine' },
  '총 투입량': { id: 'Total berat', en: 'Total weight' },
  '배합 횟수': { id: 'Jumlah campuran', en: 'Mix count' },
  'LOT No.': { id: 'No. LOT', en: 'LOT No.' },
  
  // 안내 배너
  '안전이 우선입니다. 점검없이 작업금지!': { id: '⚠️ Keselamatan utama. Dilarang kerja tanpa pemeriksaan!', en: '⚠️ Safety first. No work without inspection!' },
  
  // 요약
  '입력 행 수': { id: 'Jumlah baris', en: 'Row count' },
  '총 작업수량': { id: 'Total kerja', en: 'Total work qty' },
  '총 포장수량': { id: 'Total kemasan', en: 'Total packing' },
  '작업자 수': { id: 'Jumlah pekerja', en: 'Workers' },
  
  // 특이사항/비고 섹션
  '● 특이사항 / 비고': { id: '● Catatan / Keterangan', en: '● Remarks / Notes' },
  '● 작업 특이사항 / 비고': { id: '● Catatan kerja / Keterangan', en: '● Work remarks / Notes' },
  '특이사항이 있으면 입력하세요 (선택)': { id: 'Masukkan catatan jika ada (opsional)', en: 'Enter remarks if any (optional)' },
  '작업 중 특이사항이 있으면 입력하세요 (선택)': { id: 'Masukkan catatan jika ada (opsional)', en: 'Enter remarks if any (optional)' },
  '📋 오늘 내 제출 내역': { id: '📋 Riwayat hari ini', en: '📋 My submissions today' },
  '오늘 내 제출 내역': { id: 'Riwayat hari ini', en: 'My submissions today' },
  '오늘 제출한 내역이 없습니다.': { id: 'Belum ada data hari ini.', en: 'No submissions today.' },
  '로딩 중...': { id: 'Memuat...', en: 'Loading...' },
  '사번/항목': { id: 'Kode/Item', en: 'Code/Item' },
  
  // 작업 특이사항
  '💬 작업 특이사항 / 비고': { id: '💬 Catatan kerja / Keterangan', en: '💬 Work remarks / Notes' },
  '작업 특이사항 / 비고': { id: 'Catatan kerja / Keterangan', en: 'Work remarks / Notes' },
  '📝 특이사항': { id: '📝 Keterangan', en: '📝 Remarks' },
  '📝 전체 특이사항 (선택)': { id: '📝 Catatan keseluruhan (opsional)', en: '📝 Overall remarks (optional)' },
  
  // 섹션 헤더
  '📋 재단 작업 내역': { id: '📋 Detail Kerja Potong', en: '📋 Cutting Work Details' },
  '📋 작업 내역': { id: '📋 Detail Kerja', en: '📋 Work Details' },
  '🔒 안전 점검 완료 필요': { id: '🔒 Perlu pemeriksaan dulu', en: '🔒 Safety check required' },
  '🔒 안전 점검 완료 후 입력 가능': { id: '🔒 Isi setelah pemeriksaan selesai', en: '🔒 Complete check first' },
  '🔒 설비 점검 완료 후 입력 가능': { id: '🔒 Isi setelah pemeriksaan selesai', en: '🔒 Complete check first' },
  
  // 재단 섹션 헤더
  '재단박스': { id: 'Kotak', en: 'Box' },
  '총재단': { id: 'Total potong', en: 'Total cut' },
  '발생량(g)': { id: '(g)', en: '(g)' },
  
  // 버튼/라벨 추가
  '초기화': { id: 'Reset', en: 'Reset' },
  '개': { id: 'pcs', en: 'pcs' },
  '건': { id: 'data', en: 'records' },
  '명': { id: 'orang', en: 'people' },
  'EA': { id: 'EA', en: 'EA' },
  
  // 안내 배너 (CMB)
  '⚠️ 잠깐! 우리 회사 제품의 생명은 우리 공정에서부터 시작입니다. 확인! 확인! 확인!': { id: '⚠️ Perhatian! Kualitas produk dimulai dari proses kita. Periksa! Periksa! Periksa!', en: '⚠️ Attention! Product quality starts from our process. Check! Check! Check!' },
  
  // 점검 상태
  '✓ 작업 가능': { id: '✓ Bisa kerja', en: '✓ Ready' },
  '점검 완료': { id: 'Selesai', en: 'Completed' },
  '✓ 점검 완료!': { id: '✓ Selesai!', en: '✓ Completed!' },
  
  // CMB 설비명
  '니더1호': { id: 'Kneader 1', en: 'Kneader 1' },
  '니더2호': { id: 'Kneader 2', en: 'Kneader 2' },
  '니더3호': { id: 'Kneader 3', en: 'Kneader 3' },
  '니더4호': { id: 'Kneader 4', en: 'Kneader 4' },
  
  // CMB 테이블 헤더
  '재질': { id: 'Bahan', en: 'Material' },
  '투입량(Kg)': { id: 'Berat (Kg)', en: 'Weight (Kg)' },
  '배합횟수': { id: 'Campuran', en: 'Mix count' },
  'LOT': { id: 'LOT', en: 'LOT' },
  
  // 재단 점검 항목 추가
  '스위치 작동': { id: 'Sakelar', en: 'Switch' },
  
  // 점검 placeholder
  '이상 시 입력': { id: 'Jika ada masalah', en: 'If abnormal' },
  
  // 범례
  '범례 (클릭 시 전체 적용):': { id: 'Legenda (klik untuk semua):', en: 'Legend (click to apply all):' },
  
  // 점검 항목 (재단)
  '스위치 작동': { id: 'Sakelar berfungsi', en: 'Switch operates' },
  '칼날 상태': { id: 'Kondisi pisau', en: 'Blade condition' },
  '모터 이상음': { id: 'Suara motor abnormal', en: 'Motor abnormal noise' },
  '작동유 충만': { id: 'Oli cukup', en: 'Hydraulic oil full' },
  '안전커버 작동': { id: 'Penutup keamanan', en: 'Safety cover' },
  '에어압력': { id: 'Tekanan udara', en: 'Air pressure' },
  '청결 상태': { id: 'Kebersihan', en: 'Cleanliness' },
  '비상정지 버튼': { id: 'Tombol darurat', en: 'Emergency stop' },
  
  // 점검 항목 (CMB)
  '구동모터 이상유무': { id: 'Motor penggerak normal', en: 'Drive motor check' },
  '유압력 상태': { id: 'Tekanan hidrolik', en: 'Hydraulic pressure' },
  '냉각수 순환': { id: 'Sirkulasi air pendingin', en: 'Cooling water' },
  '로터 상태': { id: 'Kondisi rotor', en: 'Rotor condition' },
  '투입구 상태': { id: 'Kondisi hopper', en: 'Hopper condition' },
  '온도조절기 작동': { id: 'Pengatur suhu', en: 'Temp controller' },
  '청결상태': { id: 'Kebersihan', en: 'Cleanliness' },
};

function autoTranslatePage() {
  const lang = getCurrentLang();
  if (lang === 'ko') return;
  
  // 1. 모든 요소의 직접 텍스트 교체
  const elements = document.querySelectorAll('label, th, td, span, button, option, h2, h1, h3, a');
  elements.forEach(el => {
    // langSelector 내부는 건너뛰기 (언어 변경 드롭다운 보호)
    if (el.closest('#langSelector')) return;
    // select 자체는 건너뛰기 (option만 처리)
    if (el.tagName === 'SELECT') return;
    // 자식에 input/select/textarea가 있으면 건너뛰기
    if (el.querySelector('input,select,textarea,table')) return;
    // 자식 요소가 많은 복합 요소는 건너뛰기
    if (el.children.length > 3) return;
    
    const text = el.textContent.trim();
    if (!text || text.length > 80) return;
    
    // 정확히 매칭
    if (AUTO_TRANSLATE[text] && AUTO_TRANSLATE[text][lang]) {
      const before = el.textContent.match(/^(\s*)/)[0];
      const after = el.textContent.match(/(\s*)$/)[0];
      el.textContent = before + AUTO_TRANSLATE[text][lang] + after;
      return;
    }
    
    // 자식이 없는 순수 텍스트 요소에서 부분 매칭 시도
    if (el.children.length === 0 && el.tagName !== 'OPTION') {
      let changed = text;
      for (const [ko, trans] of Object.entries(AUTO_TRANSLATE)) {
        if (trans[lang] && ko.length >= 2 && changed.includes(ko)) {
          changed = changed.replace(ko, trans[lang]);
        }
      }
      if (changed !== text) {
        el.textContent = changed;
      }
    }
  });
  
  // 2. div 요소 중 직접 텍스트만 가진 것 처리
  document.querySelectorAll('div').forEach(el => {
    if (el.closest('#langSelector')) return;
    if (el.children.length > 0) return;
    const text = el.textContent.trim();
    if (!text || text.length > 80) return;
    if (AUTO_TRANSLATE[text] && AUTO_TRANSLATE[text][lang]) {
      el.textContent = AUTO_TRANSLATE[text][lang];
    }
  });
  
  // 3. placeholder 번역
  const placeholderMap = {
    '사번입력': { id: 'Kode produk', en: 'Product code' },
    '제품코드 (예: 502': { id: 'Kode produk (cth: 502', en: 'Product code (e.g. 502' },
    '제품코드': { id: 'Kode produk', en: 'Product code' },
    '뱃지 No': { id: 'No. Batch', en: 'Badge No.' },
    'Batch No.': { id: 'No. Batch', en: 'Batch No.' },
    '이상 시 입력': { id: 'Jika ada masalah', en: 'If abnormal' },
    '오늘 작업 중 특이사항을 입력하세요': { id: 'Masukkan catatan hari ini', en: 'Enter today\'s remarks' },
    '작업 중 특이사항이 있으면 입력하세요': { id: 'Masukkan catatan jika ada', en: 'Enter remarks if any' },
    '특이사항이 있으면 입력하세요': { id: 'Masukkan catatan jika ada', en: 'Enter remarks if any' },
    '설비점검 시 발견한 전체 특이사항을 입력하세요': { id: 'Masukkan catatan pemeriksaan', en: 'Enter inspection remarks' },
    '설비점검 시 발견한': { id: 'Catatan pemeriksaan', en: 'Inspection remarks' },
    '선택하세요': { id: 'Pilih', en: 'Select' },
  };
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    const ph = el.placeholder;
    for (const [ko, trans] of Object.entries(placeholderMap)) {
      if (ph.includes(ko) && trans[lang]) {
        el.placeholder = el.placeholder.replace(ko, trans[lang]);
      }
    }
  });
  
  // 4. select option 번역 (langSelector 제외)
  document.querySelectorAll('select').forEach(sel => {
    if (sel.closest('#langSelector')) return;
    sel.querySelectorAll('option').forEach(opt => {
      const text = opt.textContent.trim();
      if (AUTO_TRANSLATE[text] && AUTO_TRANSLATE[text][lang]) {
        opt.textContent = AUTO_TRANSLATE[text][lang];
      }
    });
  });
}

// 사용법: <span data-i18n="common.submit">제출하기</span>
function applyI18N() {
  const lang = getCurrentLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const [section, key] = el.dataset.i18n.split('.');
    const text = t(section, key);
    if (text) {
      if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.type !== 'button' && el.type !== 'submit') {
        el.placeholder = text;
      } else if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // title도 번역
  const titleEl = document.querySelector('[data-i18n-title]');
  if (titleEl) {
    const [section, key] = titleEl.dataset.i18nTitle.split('.');
    document.title = t(section, key) + ' - HKHT';
  }
  
  // 자동 번역 (data-i18n 없는 요소도 처리)
  autoTranslatePage();
}

// 언어 변경 함수 (설정 페이지나 드롭다운에서 호출)
function setLanguage(lang) {
  localStorage.setItem('hkht_lang', lang);
  
  // DB에도 저장 (로그인된 사용자)
  try {
    const dbI18n = window.supabase.createClient(
      'https://vpaixxlhzkwtgcllimvn.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwYWl4eGxoemt3dGdjbGxpbXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNzk4NjMsImV4cCI6MjA5MTk1NTg2M30.V8Bj0cMbM0E2TFhklYYa7TM-vO6Fi70ctACA7uUf4Ig'
    );
    dbI18n.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        dbI18n.from('users').update({ language: lang }).eq('auth_user_id', session.user.id).then(() => {});
      }
    });
  } catch(e) { console.log('언어 DB 저장 스킵:', e); }
  
  applyI18N();
}

// 언어 선택 드롭다운 생성 (상단 바에 삽입용)
function createLangSelector(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const lang = getCurrentLang();
  const options = [
    { code: 'ko', label: '🇰🇷 한국어' },
    { code: 'id', label: '🇮🇩 Indonesia' },
    { code: 'en', label: '🇬🇧 English' }
  ];

  const sel = document.createElement('select');
  sel.style.cssText = 'padding:6px 10px;border:1px solid #e0e4ed;border-radius:6px;font-size:12px;background:#f0f3f9;cursor:pointer;color:#333';
  sel.onchange = function() { setLanguage(this.value); location.reload(); };
  
  options.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt.code;
    o.textContent = opt.label;
    if (opt.code === lang) o.selected = true;
    sel.appendChild(o);
  });
  
  container.appendChild(sel);
}
