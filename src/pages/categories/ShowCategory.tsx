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
import type { Category } from "@/types/Category";

const ShowCategory = () => {
  const { id: categoryId } = useParams();
  if (!categoryId) return;

  const { t } = useTranslation("show_category");
  const navigate = useNavigate();

  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await supabase
        .from("categories")
        .select()
        .eq("id", categoryId)
        .single();

      setCategory(data as unknown as Category);
    };

    getCategory();
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
            <span className="ml-4 font-semibold">{category?.name}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/categories/edit/${categoryId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowCategory;
