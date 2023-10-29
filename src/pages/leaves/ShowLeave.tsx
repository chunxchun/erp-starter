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
import type { Leave } from "@/types/Leave";

const ShowLeave = () => {
  const { id: leaveId } = useParams();
  if (!leaveId) return;

  const { t } = useTranslation("leaves", { keyPrefix: "show_leave" });
  const navigate = useNavigate();

  const [leave, setLeave] = useState<Leave | null>(null);

  useEffect(() => {
    const getLeave = async () => {
      const { data } = await supabase
        .from("leaves")
        .select(`*, employees(nickname)`)
        .eq("id", leaveId)
        .single();

      setLeave(data as unknown as Leave);
    };

    getLeave();
  }, []);

  return (
    <div>
      <Card className="min-w-[350px] w-[60%] mx-auto my-8">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start px-8 space-y-4">
          {/* <pre>{JSON.stringify(leave, null, 4)}</pre> */}
          <p>
            <Label>{t("employee_id")}</Label>
            <span className="ml-4 font-semibold">{leave?.employees.nickname}</span>
          </p>
          <p>
            <Label>{t("start_date")}</Label>
            <span className="ml-4 font-semibold">{leave?.start_date}</span>
          </p>
          <p>
            <Label>{t("start_time")}</Label>
            <span className="ml-4 font-semibold">{leave?.start_time}</span>
          </p>
          <p>
            <Label>{t("end_date")}</Label>
            <span className="ml-4 font-semibold">{leave?.end_date}</span>
          </p>
          <p>
            <Label>{t("end_time")}</Label>
            <span className="ml-4 font-semibold">{leave?.end_time}</span>
          </p>
          <p>
            <Label>{t("type")}</Label>
            <span className="ml-4 font-semibold">{leave?.type}</span>
          </p>
          <p>
            <Label>{t("status")}</Label>
            <span className="ml-4 font-semibold">{leave?.status}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/leaves/edit/${leaveId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowLeave;
