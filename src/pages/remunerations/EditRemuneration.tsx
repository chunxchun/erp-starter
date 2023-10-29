import * as z from "zod";

import type { Remuneration, RemunerationInsert } from "@/types/Remuneration";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import RemunerationForm from "./RemunerationForm";

const RemunerationSchema = z.custom<Remuneration>();

const EditRemuneration = () => {
  const { id: remunerationId } = useParams();
  if (!remunerationId) return;

  const { t } = useTranslation("edit_remuneration");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Remuneration>({
    resolver: zodResolver(RemunerationSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("remunerations")
        .select()
        .eq("id", remunerationId)
        .single();

      return data as unknown as Remuneration;
    },
  });

  const onSubmit = async (remuneration: RemunerationInsert) => {
    const parsedRemuneration = {
      ...remuneration,
    };

    try {
      const { error } = await supabase
        .from("remunerations")
        .insert(parsedRemuneration)
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
      <RemunerationForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditRemuneration;
