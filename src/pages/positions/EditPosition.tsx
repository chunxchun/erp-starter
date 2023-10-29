import * as z from "zod";

import type { Position, PositionInsert } from "@/types/Position";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import PositionForm from "./PositionForm";

const PositionSchema = z.custom<Position>();

const EditPosition = () => {
  const { id: positionId } = useParams();
  if (!positionId) return;

  const { t } = useTranslation("edit_position");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Position>({
    resolver: zodResolver(PositionSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("positions")
        .select()
        .eq("id", positionId)
        .single();

      return data as unknown as Position;
    },
  });

  const onSubmit = async (position: PositionInsert) => {
    const parsedPosition = {
      ...position,
    };

    try {
      const { error } = await supabase
        .from("positions")
        .update(parsedPosition)
        .eq("id", positionId);

      if (error) throw error;

      toast({
        title: t("submit_success_msg"),
      });
      navigate(-1);
    } catch (err) {
      toast({
        title: t("submit_fail_msg"),
        description: `${err}`,
      });
    }
  };

  return (
    <div>
      <PositionForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditPosition;
