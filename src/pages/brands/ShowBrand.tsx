import { supabase } from "@/supabaseClient";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import type { Brand } from "@/types/Brand";

const ShowBrand = () => {
  const { id: brandId } = useParams();
  if (!brandId) return;

  const { t } = useTranslation("show_brand");
  const navigate = useNavigate();

  const [brand, setBrand] = useState<Brand | null>(null);

  useEffect(() => {
    const getBrand = async () => {
      const { data } = await supabase
        .from("brands")
        .select()
        .eq("id", brandId)
        .single();

      setBrand(data as unknown as Brand);
    };

    getBrand();
  }, []);

  return (
    <div>
      <Card className="min-w-[350px] w-[60%] mx-auto my-8">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start px-8 space-y-4">
          <p>
            <Label>{t("last_name")}</Label>
            <span className="ml-4 font-semibold">{brand?.name}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/brands/edit/${brandId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowBrand;
