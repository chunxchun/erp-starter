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
import type { Job } from "@/types/Job";

const ShowJob = () => {
  const { id: jobId } = useParams();
  if (!jobId) return;

  const { t } = useTranslation("jobs", { keyPrefix: "show_job" });
  const navigate = useNavigate();

  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const getJob = async () => {
      const { data } = await supabase
        .from("jobs")
        .select(`*, departments(name)`)
        .eq("id", jobId)
        .single();

      setJob(data as unknown as Job);
    };

    getJob();
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
            <span className="ml-4 font-semibold">{job?.name}</span>
          </p>
          <p>
            <Label>{t("desc")}</Label>
            <span className="ml-4 font-semibold">{job?.desc}</span>
          </p>
          <p>
            <Label>{t("department_id")}</Label>
            <span className="ml-4 font-semibold">{job?.departments.name}</span>
          </p>
          <p>
            <Label>{t("type")}</Label>
            <span className="ml-4 font-semibold">{job?.type}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/jobs/edit/${jobId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowJob;
