-- ═══════════════════════════════════════════════
-- 성형(Molding) 작업일지 DB 테이블
-- Supabase SQL Editor에서 실행하세요
-- ═══════════════════════════════════════════════

-- 1) 성형 작업일지 (molding_reports)
CREATE TABLE IF NOT EXISTS molding_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  work_date DATE NOT NULL,
  shift_type TEXT NOT NULL DEFAULT '주간',
  team TEXT NOT NULL,
  equipment_no TEXT NOT NULL,
  equipment_id TEXT NOT NULL,
  start_time TEXT,
  end_time TEXT,
  worker_name TEXT NOT NULL,
  sabun TEXT,
  product_name TEXT,
  batch_no TEXT,
  cavity INTEGER,
  shot_count INTEGER,
  production_qty INTEGER,
  defect_qty INTEGER DEFAULT 0,
  work_type TEXT DEFAULT '표준',
  molding_pressure NUMERIC,
  upper_temp NUMERIC,
  lower_temp NUMERIC,
  downtime_code TEXT,
  downtime_minutes INTEGER,
  problem TEXT,
  note TEXT,
  created_by_emp_code TEXT,
  created_by_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_molding_reports_date ON molding_reports(work_date);
CREATE INDEX IF NOT EXISTS idx_molding_reports_team ON molding_reports(team);
CREATE INDEX IF NOT EXISTS idx_molding_reports_equipment ON molding_reports(equipment_no);

ALTER TABLE molding_reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "molding_reports_select" ON molding_reports FOR SELECT USING (true);
CREATE POLICY "molding_reports_insert" ON molding_reports FOR INSERT WITH CHECK (true);
CREATE POLICY "molding_reports_update" ON molding_reports FOR UPDATE USING (true);
CREATE POLICY "molding_reports_delete" ON molding_reports FOR DELETE USING (true);

-- 2) 성형 설비 일상점검 (molding_safety_check)
CREATE TABLE IF NOT EXISTS molding_safety_check (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  check_date DATE NOT NULL,
  team TEXT NOT NULL,
  equipment_no TEXT NOT NULL,
  equipment_id TEXT NOT NULL,
  check_data JSONB NOT NULL DEFAULT '{}',
  remarks TEXT,
  overall_remarks TEXT,
  checked_by_emp_code TEXT,
  checked_by_name TEXT,
  checked_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_molding_safety_date ON molding_safety_check(check_date);
CREATE INDEX IF NOT EXISTS idx_molding_safety_equipment ON molding_safety_check(equipment_no);

ALTER TABLE molding_safety_check ENABLE ROW LEVEL SECURITY;
CREATE POLICY "molding_safety_select" ON molding_safety_check FOR SELECT USING (true);
CREATE POLICY "molding_safety_insert" ON molding_safety_check FOR INSERT WITH CHECK (true);
CREATE POLICY "molding_safety_update" ON molding_safety_check FOR UPDATE USING (true);
CREATE POLICY "molding_safety_delete" ON molding_safety_check FOR DELETE USING (true);
