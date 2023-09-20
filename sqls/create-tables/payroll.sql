-- create payroll table schema
-- DROP TABLE IF EXISTS payroll;
CREATE TABLE IF NOT EXISTS public.payrolls (
  id UUID NOT NULL DEFAULT uuid_generate_v4 (),
  employee_id uuid NOT NULL,
  pay_date DATE NOT NULL,
  pay_period_start DATE NOT NULL,
  pay_period_end DATE NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  CONSTRAINT payroll_pkey PRIMARY KEY (id),
  CONSTRAINT payroll_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES employees (id) ON DELETE CASCADE
) tablespace pg_default;

```