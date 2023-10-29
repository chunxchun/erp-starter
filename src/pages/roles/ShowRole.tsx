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
import type { Role } from "@/types/Role";

type RoleQuery = Role;

const ShowRole = () => {
  const { id: roleId } = useParams();
  if (!roleId) return;

  const { t } = useTranslation("show_role");
  const navigate = useNavigate();

  const [role, setRole] = useState<RoleQuery | null>(null);

  useEffect(() => {
    const getRole = async () => {
      const { data } = await supabase
        .from("roles")
        .select()
        .eq("id", roleId)
        .single();

      setRole(data as unknown as RoleQuery);
    };

    getRole();
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
            <span className="ml-4 font-semibold">{role?.name}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/roles/edit/${roleId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowRole;
