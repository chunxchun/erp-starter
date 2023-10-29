import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import RemunerationForm from "./RemunerationForm";

import { Remuneration, RemunerationInsert } from "@/types/Remuneration";

const RemunerationSchema = z.custom<Remuneration>();

const CreateRemuneration = () => {
  const { t } = useTranslation("create_remuneration");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Remuneration>({
    resolver: zodResolver(RemunerationSchema),
    defaultValues: {
      // id: "",
      name: "",
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
      <RemunerationForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateRemuneration;
