-- create leaves table schema
-- DROP TABLE IF EXISTS leaves;
CREATE TABLE IF NOT EXISTS public.leaves (
  id uuid NOT NULL DEFAULT uuid_generate_v4 (),
  created_at TIMESTAMP WITH time zone DEFAULT timezone('utc' :: text, NOW()) NOT NULL,
  employee_id uuid NOT NULL,
  start_date DATE NOT NULL,
  start_time time NOT NULL,
  end_date DATE NOT NULL,
  end_time time NOT NULL,
  reason text NOT NULL,
  STATUS text NOT NULL DEFAULT 'pending',
  CONSTRAINT leave_pkey PRIMARY KEY (id),
  CONSTRAINT leave_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES employees(id)
);

ALTER TABLE
  leaves enable ROW LEVEL SECURITY;

CREATE policy "Authenticated users can view leaves" ON leaves FOR ALL TO Authenticated USING (TRUE);