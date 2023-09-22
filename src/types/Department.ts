import { Database } from "@/types/supabase";

export type Department = Database["public"]["Tables"]["departments"]["Row"];  
export type DepartmentInsert = Database["public"]["Tables"]["departments"]["Insert"];
export type DepartmentUpdate = Database["public"]["Tables"]["departments"]["Update"];