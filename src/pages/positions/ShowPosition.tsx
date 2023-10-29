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
import type { Position } from "@/types/Position";

type PositionQuery = Position & { departments: { name: string } };

const ShowPosition = () => {
  const { id: positionId } = useParams();
  if (!positionId) return;

  const { t } = useTranslation("show_position");
  const navigate = useNavigate();

  const [position, setPosition] = useState<PositionQuery | null>(null);

  useEffect(() => {
    const getPosition = async () => {
      const { data } = await supabase
        .from("positions")
        .select(`*, departments!inner(name)`)
        .eq("id", positionId)
        .single();

      setPosition(data as unknown as PositionQuery);
    };

    getPosition();
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
            <span className="ml-4 font-semibold">{position?.name}</span>
          </p>
          <p>
            <Label>{t("department")}</Label>
            <span className="ml-4 font-semibold">
              {position?.departments?.name}
            </span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/positions/edit/${positionId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowPosition;
