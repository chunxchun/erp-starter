import * as z from "zod";

import type { Category, CategoryInsert } from "@/types/Category";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import CategoryForm from "./CategoryForm";

const CategorySchema = z.custom<Category>();

const EditCategory = () => {
  const { id: categoryId } = useParams();
  if (!categoryId) return;

  const { t } = useTranslation("edit_category");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Category>({
    resolver: zodResolver(CategorySchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("categories")
        .select()
        .eq("id", categoryId)
        .single();

      return data as unknown as Category;
    },
  });

  const onSubmit = async (category: CategoryInsert) => {
    const parsedCategory = {
      ...category,
    };

    try {
      const { error } = await supabase
        .from("categories")
        .insert(parsedCategory)
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
      <CategoryForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditCategory;
