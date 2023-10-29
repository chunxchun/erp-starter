-- create timesheets table schema
-- DROP TABLE IF EXISTS timesheets;

CREATE TABLE IF NOT EXISTS public.timesheets (
  id uuid NOT NULL DEFAULT uuid_generate_v4 (),
  created_at TIMESTAMP WITH time zone DEFAULT timezone('utc' :: text, NOW()) NOT NULL,
  employee_id uuid NOT NULL,
  start_date DATE NOT NULL,
  start_time time NOT NULL,
  end_date DATE NOT NULL,
  end_time time NOT NULL,
  STATUS text NOT NULL DEFAULT 'pending',
  CONSTRAINT timesheet_pkey PRIMARY KEY (id),
  CONSTRAINT timesheet_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES employees(id)
);

ALTER TABLE
  timesheets enable ROW LEVEL SECURITY;

CREATE policy "Authenticated users can view timesheets" ON timesheets FOR ALL TO Authenticated USING (TRUE);