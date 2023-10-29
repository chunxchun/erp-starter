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
import type { Warehouse } from "@/types/Warehouse";

const ShowWarehouse = () => {
  const { id: warehouseId } = useParams();
  if (!warehouseId) return;

  const { t } = useTranslation("show_warehouse");
  const navigate = useNavigate();

  const [warehouse, setWarehouse] = useState<Warehouse | null>(null);

  useEffect(() => {
    const getWarehouse = async () => {
      const { data } = await supabase
        .from("warehouses")
        .select()
        .eq("id", warehouseId)
        .single();

      setWarehouse(data as unknown as Warehouse);
    };

    getWarehouse();
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
            <span className="ml-4 font-semibold">{warehouse?.name}</span>
          </p>
          <p>
            <Label>{t("address")}</Label>
            <span className="ml-4 font-semibold">{warehouse?.address}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/warehouses/edit/${warehouseId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowWarehouse;
