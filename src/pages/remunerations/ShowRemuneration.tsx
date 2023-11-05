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
import type { Remuneration } from "@/types/Remuneration";

const ShowRemuneration = () => {
  const { id: remunerationId } = useParams();
  if (!remunerationId) return;

  const { t } = useTranslation("remunerations", {
    keyPrefix: "show_remuneration",
  });
  const navigate = useNavigate();

  const [remuneration, setRemuneration] = useState<Remuneration | null>(null);

  useEffect(() => {
    const getRemuneration = async () => {
      const { data } = await supabase
        .from("remunerations")
        .select(`*, jobs(name), employees(nickname)`)
        .eq("id", remunerationId)
        .single();

      setRemuneration(data as unknown as Remuneration);
    };

    getRemuneration();
  }, []);

  return (
    <div>
      <Card className="min-w-[350px] w-[60%] mx-auto my-8">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start px-8 space-y-4">
          <p>
            <Label>{t("employee_id")}</Label>
            <span className="ml-4 font-semibold">
              {remuneration?.employees.nickname}
            </span>
          </p>
          <p>
            <Label>{t("job_id")}</Label>
            <span className="ml-4 font-semibold">
              {remuneration?.jobs.name}
            </span>
          </p>
          <p>
            <Label>{t("start_date")}</Label>
            <span className="ml-4 font-semibold">
              {remuneration?.start_date}
            </span>
          </p>
          <p>
            <Label>{t("end_date")}</Label>
            <span className="ml-4 font-semibold">{remuneration?.end_date}</span>
          </p>
          <p>
            <Label>{t("entitled_sick_leave")}</Label>
            <span className="ml-4 font-semibold">
              {remuneration?.entitled_sick_leave}
            </span>
          </p>
          <p>
            <Label>{t("entitled_annual_leave")}</Label>
            <span className="ml-4 font-semibold">
              {remuneration?.entitled_annual_leave}
            </span>
          </p>
          <p>
            <Label>{t("entitled_maternity_leave")}</Label>
            <span className="ml-4 font-semibold">
              {remuneration?.entitled_maternity_leave}
            </span>
          </p>
          <p>
            <Label>{t("type")}</Label>
            <span className="ml-4 font-semibold">{remuneration?.type}</span>
          </p>
          <p>
            <Label>{t("payment_mode")}</Label>
            <span className="ml-4 font-semibold">
              {remuneration?.payment_mode}
            </span>
          </p>
          <p>
            <Label>{t("amount")}</Label>
            <span className="ml-4 font-semibold">{remuneration?.amount}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button
            onClick={() => navigate(`/remunerations/edit/${remunerationId}`)}
          >
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowRemuneration;
