import * as z from "zod";

import type { Logistic, LogisticInsert } from "@/types/Logistic";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import LogisticForm from "./LogisticForm";

const LogisticSchema = z.custom<Logistic>();

const EditLogistic = () => {
  const { id: logisticId } = useParams();
  if (!logisticId) return;

  const { t } = useTranslation("edit_logistic");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Logistic>({
    resolver: zodResolver(LogisticSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("logistics")
        .select()
        .eq("id", logisticId)
        .single();

      return data as unknown as Logistic;
    },
  });

  const onSubmit = async (logistic: LogisticInsert) => {
    const parsedLogistic = {
      ...logistic,
    };

    try {
      const { error } = await supabase
        .from("logistics")
        .insert(parsedLogistic)
        .select();

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
      <LogisticForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditLogistic;
