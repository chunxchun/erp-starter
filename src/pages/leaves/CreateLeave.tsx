import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import LeaveForm from "./LeaveForm";

import type { Leave, LeaveInsert } from "@/types/Leave";

const LeaveSchema = z.custom<Leave>();

const CreateLeave = () => {
  const { t } = useTranslation("leaves", {keyPrefix: "create_leave"});
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Leave>({
    resolver: zodResolver(LeaveSchema),
    defaultValues: {
      employee_id: "",
      start_date: "",
      start_time: "",
      end_date: "",
      end_time: "",
      reason: "",
    },
  });

  const onSubmit = async (leave: LeaveInsert) => {
    const parsedLeave = {
      ...leave,
      status: "pending",
    };
    // console.log(parsedLeave)

    try {
      const { error } = await supabase
        .from("leaves")
        .insert(parsedLeave)
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
      <LeaveForm form={form} onSubmit={onSubmit} t={t} isEditForm={false} />
    </div>
  );
};

export default CreateLeave;
