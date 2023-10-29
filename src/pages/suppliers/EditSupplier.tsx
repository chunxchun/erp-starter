import * as z from "zod";

import type { Supplier, SupplierInsert } from "@/types/Supplier";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import SupplierForm from "./SupplierForm";

const SupplierSchema = z.custom<Supplier>();

const EditSupplier = () => {
  const { id: supplierId } = useParams();
  if (!supplierId) return;

  const { t } = useTranslation("edit_supplier");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Supplier>({
    resolver: zodResolver(SupplierSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("suppliers")
        .select()
        .eq("id", supplierId)
        .single();

      return data as unknown as Supplier;
    },
  });

  const onSubmit = async (supplier: SupplierInsert) => {
    const parsedSupplier = {
      ...supplier,
    };

    try {
      const { error } = await supabase
        .from("suppliers")
        .insert(parsedSupplier)
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
      <SupplierForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditSupplier;
