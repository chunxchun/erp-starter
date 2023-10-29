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

  const { t } = useTranslation("show_remuneration");
  const navigate = useNavigate();

  const [remuneration, setRemuneration] = useState<Remuneration | null>(null);

  useEffect(() => {
    const getRemuneration = async () => {
      const { data } = await supabase
        .from("remunerations")
        .select()
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
            <Label>{t("last_name")}</Label>
            <span className="ml-4 font-semibold">{remuneration?.name}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/remunerations/edit/${remunerationId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowRemuneration;
