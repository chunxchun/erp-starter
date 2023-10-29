import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import WarehouseForm from "./WarehouseForm";

import { Warehouse, WarehouseInsert } from "@/types/Warehouse";

const WarehouseSchema = z.custom<Warehouse>();

const CreateWarehouse = () => {
  const { t } = useTranslation("create_warehouse");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Warehouse>({
    resolver: zodResolver(WarehouseSchema),
    defaultValues: {
      // id: "",
      name: "",
      address: "",
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

      toast({ title: t("submit_success_msg") });
      navigate(-1);
    } catch (err) {
      toast({
        title: t("submit_fail_msg"),
        description: `${JSON.stringify(err)}`,
      });
    }
  };

  return (
    <div>
      <WarehouseForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateWarehouse;
