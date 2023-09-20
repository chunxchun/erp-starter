// import { Database } from '@/database.types';
import { Database } from "@/types/supabase";
export type Employee = Database["public"]["Tables"]["employees"]["Row"];
export type EmployeeInsert =
  Database["public"]["Tables"]["employees"]["Insert"];
