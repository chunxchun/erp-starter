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
import type { Department } from "@/types/Department";

const ShowDepartment = () => {
  const { id: departmentId } = useParams();
  if (!departmentId) return;

  const { t } = useTranslation("show_department");
  const navigate = useNavigate();

  const [department, setDepartment] = useState<Department | null>(null);

  useEffect(() => {
    const getDepartment = async () => {
      const { data } = await supabase
        .from("departments")
        .select()
        .eq("id", departmentId)
        .single();

      setDepartment(data as unknown as Department);
    };

    getDepartment();
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
            <span className="ml-4 font-semibold">{department?.name}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/departments/edit/${departmentId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowDepartment;
