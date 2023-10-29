import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import SupplierForm from "./SupplierForm";

import { Supplier, SupplierInsert } from "@/types/Supplier";

const SupplierSchema = z.custom<Supplier>();

const CreateSupplier = () => {
  const { t } = useTranslation("create_supplier");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Supplier>({
    resolver: zodResolver(SupplierSchema),
    defaultValues: {
      // id: "",
      name: "",
      phone: "",
      email: "",
      address: "",
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
      <SupplierForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateSupplier;
