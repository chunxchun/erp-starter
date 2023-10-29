import * as z from "zod";

import type { Warehouse, WarehouseInsert } from "@/types/Warehouse";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import WarehouseForm from "./WarehouseForm";

const WarehouseSchema = z.custom<Warehouse>();

const EditWarehouse = () => {
  const { id: warehouseId } = useParams();
  if (!warehouseId) return;

  const { t } = useTranslation("edit_warehouse");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Warehouse>({
    resolver: zodResolver(WarehouseSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("warehouses")
        .select()
        .eq("id", warehouseId)
        .single();

      return data as unknown as Warehouse;
    },
  });

  const onSubmit = async (warehouse: WarehouseInsert) => {
    const parsedWarehouse = {
      ...warehouse,
    };

    try {
      const { error } = await supabase
        .from("warehouses")
        .insert(parsedWarehouse)
        .select();

      if (error) throw error;

      toast({
        title: t("submit_success_msg"),
      });
      navigate(-1);
    } catch (err) {
      toast({
        title: t("submit_fail_msg"),
        description: `${err}`,
      });
    }
  };

  return (
    <div>
      <WarehouseForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditWarehouse;
