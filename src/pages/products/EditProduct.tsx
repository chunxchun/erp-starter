import * as z from "zod";

import type { Product, ProductInsert } from "@/types/Product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "./ProductForm";

const ProductSchema = z.custom<Product>();

const EditProduct = () => {
  const { id: productId } = useParams();
  if (!productId) return;

  const { t } = useTranslation("edit_product");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Product>({
    resolver: zodResolver(ProductSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("products")
        .select()
        .eq("id", productId)
        .single();

      return data as unknown as Product;
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
      <ProductForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditProduct;
