import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import BrandForm from "./BrandForm";

import { Brand, BrandInsert } from "@/types/Brand";

const BrandSchema = z.custom<Brand>();

const CreateBrand = () => {
  const { t } = useTranslation("create_brand");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Brand>({
    resolver: zodResolver(BrandSchema),
    defaultValues: {
      // id: "",
      name: "",
    },
  });

  const onSubmit = async (brand: BrandInsert) => {
    const parsedBrand = {
      ...brand,
    };

    try {
      const { error } = await supabase
        .from("brands")
        .insert(parsedBrand)
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
      <BrandForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateBrand;
