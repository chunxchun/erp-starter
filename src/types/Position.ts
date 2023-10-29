import { Database } from "@/types/supabase";

export type Position = Database["public"]["Tables"]["positions"]["Row"];
export type PositionInsert = Database["public"]["Tables"]["positions"]["Insert"];
export type PositionUpdate = Database["public"]["Tables"]["positions"]["Update"];
// export type QueryPosition = Omit\ Position.omit<"department_id"> & {