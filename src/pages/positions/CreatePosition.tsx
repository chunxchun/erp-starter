import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import PositionForm from "./PositionForm";

import type { Position, PositionInsert } from "@/types/Position";

const PositionSchema = z.custom<Position>();

const CreatePosition = () => {
  const { t } = useTranslation("create_position");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Position>({
    resolver: zodResolver(PositionSchema),
    defaultValues: {
      // id: "",
      name: "",
      department_id: "",
    },
  });

  const onSubmit = async (position: PositionInsert) => {
    const parsedPosition = {
      ...position,
    };

    try {
      const { error } = await supabase
        .from("positions")
        .insert(parsedPosition)
        .select();

      if (error) throw error;

      toast({ title: t("submit_success_msg") });
      navigate(-1);
    } catch (err) {
      toast({
        title: t("submit_fail_msg"),
        description: `${JSON.stringify(err)}`,
      });
    }
  };

  return (
    <div>
      <PositionForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreatePosition;
