import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import ProductForm from "./ProductForm";

import { Product, ProductInsert } from "@/types/Product";

const ProductSchema = z.custom<Product>();

const CreateProduct = () => {
  const { t } = useTranslation("create_product");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Product>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      // id: "",
      name: "",
    },
  });

  const onSubmit = async (product: ProductInsert) => {
    const parsedProduct = {
      ...product,
    };

    try {
      const { error } = await supabase
        .from("products")
        .insert(parsedProduct)
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
      <ProductForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateProduct;
