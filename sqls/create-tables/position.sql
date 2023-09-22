-- create positions table schema
-- DROP TABLE IF EXISTS positions;
CREATE TABLE IF NOT EXISTS public.positions (
  id UUID NOT NULL DEFAULT uuid_generate_v4 (),
  name text NOT NULL,
  department_id UUID NOT NULL,
  CONSTRAINT position_pkey PRIMARY KEY (id),
  CONSTRAINT position_department_id_fkey FOREIGN KEY (department_id) REFERENCES departments (id) ON DELETE CASCADE
) tablespace pg_default;

ALTER TABLE
  positions enable ROW LEVEL SECURITY;

CREATE policy "Auth users can view positions" ON positions FOR ALL TO Authenticated USING (TRUE);