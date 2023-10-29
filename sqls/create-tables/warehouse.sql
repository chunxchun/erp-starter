-- create warehouses table schema
-- DROP TABLE IF EXISTS warehouses;

CREATE TABLE IF NOT EXISTS public.warehouses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT timezone('utc' :: text, NOW()) NOT NULL,
  name text NOT NULL,
  address text NOT NULL
);

ALTER TABLE
  warehouses enable ROW LEVEL SECURITY;

CREATE policy "Authenticated users can view warehouses" ON warehouses FOR ALL TO authenticated USING (TRUE);