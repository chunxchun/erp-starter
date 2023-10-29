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
import type { Employee } from "@/types/Employee";

const ShowEmployee = () => {
  const { id: employeeId } = useParams();
  if (!employeeId) return;

  const { t } = useTranslation("employees", { keyPrefix: "show_employee" });
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const getEmployee = async () => {
      const { data } = await supabase
        .from("employees")
        .select()
        .eq("id", employeeId)
        .single();

      setEmployee(data as unknown as Employee);
    };

    getEmployee();
  }, []);

  return (
    <div>
      <Card className="min-w-[350px] w-[60%] mx-auto my-8">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start px-8 space-y-4">
          {/* <pre>{JSON.stringify(employee, null, 4)}</pre> */}
          <p>
            <Label>{t("last_name")}</Label>
            <span className="ml-4 font-semibold">{employee?.last_name}</span>
          </p>
          <p>
            <Label>{t("first_name")}</Label>
            <span className="ml-4 font-semibold">{employee?.first_name}</span>
          </p>
          <p>
            <Label>{t("nickname")}</Label>
            <span className="ml-4 font-semibold">{employee?.nickname}</span>
          </p>
          <p>
            <Label>{t("birthday")}</Label>
            <span className="ml-4 font-semibold">{employee?.birthday}</span>
          </p>
          <p>
            <Label>{t("address")}</Label>
            <span className="ml-4 font-semibold">{employee?.address}</span>
          </p>
          <p>
            <Label>{t("mobile")}</Label>
            <span className="ml-4 font-semibold">{employee?.mobile}</span>
          </p>
          <p>
            <Label>{t("role")}</Label>
            <span className="ml-4 font-semibold">{employee?.role}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/employees/edit/${employeeId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowEmployee;
