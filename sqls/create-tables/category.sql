-- create categories table schema
-- DROP TABLE IF EXISTS categories;

CREATE TABLE IF NOT EXISTS public.categories (
  id UUID NOT NULL DEFAULT uuid_generate_v4 (),
  created_at timestamp WITH time zone DEFAULT timezone('utc' :: text, NOW()) NOT NULL,
  name text NOT NULL,
  CONSTRAINT category_pkey PRIMARY KEY (id)
) tablespace pg_default;

ALTER TABLE
  categories enable ROW LEVEL SECURITY;

CREATE policy "Anyone can view categories" ON categories FOR ALL TO Authenticated USING (TRUE);