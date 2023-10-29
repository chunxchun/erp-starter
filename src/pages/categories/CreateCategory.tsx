import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import CategoryForm from "./CategoryForm";

import { Category, CategoryInsert } from "@/types/Category";

const CategorySchema = z.custom<Category>();

const CreateCategory = () => {
  const { t } = useTranslation("create_category");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Category>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      // id: "",
      name: "",
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
      <CategoryForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateCategory;
