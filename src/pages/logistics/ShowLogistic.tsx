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
import type { Logistic } from "@/types/Logistic";

const ShowLogistic = () => {
  const { id: logisticId } = useParams();
  if (!logisticId) return;

  const { t } = useTranslation("show_logistic");
  const navigate = useNavigate();

  const [logistic, setLogistic] = useState<Logistic | null>(null);

  useEffect(() => {
    const getLogistic = async () => {
      const { data } = await supabase
        .from("logistics")
        .select()
        .eq("id", logisticId)
        .single();

      setLogistic(data as unknown as Logistic);
    };

    getLogistic();
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
            <span className="ml-4 font-semibold">{logistic?.name}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/logistics/edit/${logisticId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowLogistic;
