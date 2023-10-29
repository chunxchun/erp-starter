import * as z from "zod";

import type { Brand, BrandInsert } from "@/types/Brand";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import BrandForm from "./BrandForm";

const BrandSchema = z.custom<Brand>();

const EditBrand = () => {
  const { id: brandId } = useParams();
  if (!brandId) return;

  const { t } = useTranslation("edit_brand");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Brand>({
    resolver: zodResolver(BrandSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("brands")
        .select()
        .eq("id", brandId)
        .single();

      return data as unknown as Brand;
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
      <BrandForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditBrand;
