import { Database } from "@/types/supabase";

export type Warehouse = Database["public"]["Tables"]["warehouses"]["Row"];  
export type WarehouseInsert = Database["public"]["Tables"]["warehouses"]["Insert"];
export type WarehouseUpdate = Database["public"]["Tables"]["warehouses"]["Update"];