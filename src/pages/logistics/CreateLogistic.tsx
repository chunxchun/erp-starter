import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import LogisticForm from "./LogisticForm";

import { Logistic, LogisticInsert } from "@/types/Logistic";

const LogisticSchema = z.custom<Logistic>();

const CreateLogistic = () => {
  const { t } = useTranslation("create_logistic");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Logistic>({
    resolver: zodResolver(LogisticSchema),
    defaultValues: {
      // id: "",
      name: "",
      product_id: "",
      warehouse_id: "",
      type: "",
      quantity_change: "",
      date: "",
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
      <LogisticForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateLogistic;
