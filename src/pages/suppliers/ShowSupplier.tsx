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
import type { Supplier } from "@/types/Supplier";

const ShowSupplier = () => {
  const { id: supplierId } = useParams();
  if (!supplierId) return;

  const { t } = useTranslation("show_supplier");
  const navigate = useNavigate();

  const [supplier, setSupplier] = useState<Supplier | null>(null);

  useEffect(() => {
    const getSupplier = async () => {
      const { data } = await supabase
        .from("suppliers")
        .select()
        .eq("id", supplierId)
        .single();

      setSupplier(data as unknown as Supplier);
    };

    getSupplier();
  }, []);

  return (
    <div>
      <Card className="min-w-[350px] w-[60%] mx-auto my-8">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start px-8 space-y-4">
          <p>
            <Label>{t("name")}</Label>
            <span className="ml-4 font-semibold">{supplier?.name}</span>
          </p>
          <p>
            <Label>{t("phone")}</Label>
            <span className="ml-4 font-semibold">{supplier?.phone}</span>
          </p>
          <p>
            <Label>{t("email")}</Label>
            <span className="ml-4 font-semibold">{supplier?.email}</span>
          </p>
          <p>
            <Label>{t("address")}</Label>
            <span className="ml-4 font-semibold">{supplier?.address}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/suppliers/edit/${supplierId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowSupplier;
