-- create departments table schema
-- DROP TABLE IF EXISTS departments;

CREATE TABLE IF NOT EXISTS public.departments (
  id UUID NOT NULL DEFAULT uuid_generate_v4 (),
  created_at timestamp WITH time zone DEFAULT timezone('utc' :: text, NOW()) NOT NULL,
  name text NOT NULL,
  CONSTRAINT department_pkey PRIMARY KEY (id)
) tablespace pg_default;

ALTER TABLE
  departments enable ROW LEVEL SECURITY;

CREATE policy "Anyone can view departments" ON departments FOR ALL TO Authenticated USING (TRUE);