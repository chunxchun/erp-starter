export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      brands: {
        Row: {
          created_at: string
          id: string
          name: string
          origin: string | null
          since: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          origin?: string | null
          since?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          origin?: string | null
          since?: string | null
        }
        Relationships: []
      }
      employees: {
        Row: {
          address: string
          birthday: string
          claim_approver_id: string | null
          created_at: string
          email: string
          first_name: string
          hk_id: string
          id: string
          image_url: string | null
          last_name: string
          leave_approver_id: string | null
          mobile: string
          nickname: string
          role: string | null
          supervisor_id: string | null
          timesheet_approver_id: string | null
        }
        Insert: {
          address: string
          birthday: string
          claim_approver_id?: string | null
          created_at?: string
          email: string
          first_name: string
          hk_id: string
          id?: string
          image_url?: string | null
          last_name: string
          leave_approver_id?: string | null
          mobile: string
          nickname: string
          role?: string | null
          supervisor_id?: string | null
          timesheet_approver_id?: string | null
        }
        Update: {
          address?: string
          birthday?: string
          claim_approver_id?: string | null
          created_at?: string
          email?: string
          first_name?: string
          hk_id?: string
          id?: string
          image_url?: string | null
          last_name?: string
          leave_approver_id?: string | null
          mobile?: string
          nickname?: string
          role?: string | null
          supervisor_id?: string | null
          timesheet_approver_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_claim_approver_id_fkey"
            columns: ["claim_approver_id"]
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_leave_approver_id_fkey"
            columns: ["leave_approver_id"]
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_role_fkey"
            columns: ["role"]
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_supervisor_id_fkey"
            columns: ["supervisor_id"]
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_timesheet_approver_id_fkey"
            columns: ["timesheet_approver_id"]
            referencedRelation: "employees"
            referencedColumns: ["id"]
          }
        ]
      }
      menu_item_groups: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          name?: string
        }
        Relationships: []
      }
      menu_items: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          menu_item_group_id: string | null
          modifiers: Json
          name: string
          price: number
          selectables: Json
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          menu_item_group_id?: string | null
          modifiers: Json
          name: string
          price: number
          selectables: Json
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          menu_item_group_id?: string | null
          modifiers?: Json
          name?: string
          price?: number
          selectables?: Json
        }
        Relationships: [
          {
            foreignKeyName: "menu_items_menu_item_group_id_fkey"
            columns: ["menu_item_group_id"]
            referencedRelation: "menu_item_groups"
            referencedColumns: ["id"]
          }
        ]
      }
      modifier_option_items: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      selectable_option_items: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
        }
        Relationships: []
      }
      tests: {
        Row: {
          id: string
          payload: Json
          title: string
        }
        Insert: {
          id?: string
          payload: Json
          title: string
        }
        Update: {
          id?: string
          payload?: Json
          title?: string
        }
        Relationships: []
      }
      todos: {
        Row: {
          created_at: string
          id: string
          is_complete: boolean | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_complete?: boolean | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_complete?: boolean | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "todos_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      currency: "hkd"
      logistic_mode: "internal-transfer, purchase, sales, scrap"
      payment_mode: "monthly" | "hourly" | "daily" | "project-based"
      remuneration_mode: "monthly" | "hourly" | "daily" | "project-based"
      stock_take_mode: "month" | "quarter" | "semi-annual" | "annual"
      unit: "pcs" | "box" | "pack"
    }
    CompositeTypes: {
      modifier_option_item: {
        name: string
        description: string
        image_url: string
      }
    }
  }
}
