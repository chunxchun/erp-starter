-- create jobs table schema
-- DROP TABLE IF EXISTS jobs;
CREATE TABLE IF NOT EXISTS public.jobs (
  id UUID NOT NULL DEFAULT uuid_generate_v4 (),
  employee_id UUID NOT NULL,
  position_id UUID NOT NULL,
  job_period_start DATE NOT NULL,
  job_period_end DATE,
  CONSTRAINT job_pkey PRIMARY KEY (id),
  CONSTRAINT job_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES employees (id) ON DELETE CASCADE,
  CONSTRAINT job_position_id_fkey FOREIGN KEY (position_id) REFERENCES positions (id) ON DELETE CASCADE
) tablespace pg_default;

ALTER TABLE
  jobs enable ROW LEVEL SECURITY;

CREATE policy "Auth useres can view jobs" ON jobs FOR ALL TO Authenticated USING (TRUE);