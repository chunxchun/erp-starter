import * as z from "zod";

import type { Leave, LeaveInsert } from "@/types/Leave";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import LeaveForm from "./LeaveForm";

const LeaveSchema = z.custom<Leave>();

const EditLeave = () => {
  const { id: leaveId } = useParams();
  if (!leaveId) return;

  const { t } = useTranslation("edit_leave");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Leave>({
    resolver: zodResolver(LeaveSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("leaves")
        .select()
        .eq("id", leaveId)
        .single();

      return data as unknown as Leave;
    },
  });

  const onSubmit = async (leave: LeaveInsert) => {
    const parsedLeave = {
      ...leave,
      birthday: new Date(leave.birthday).toLocaleDateString("en-CA"), // YYYY-MM-DD
    };

    try {
      const { error } = await supabase
        .from("leaves")
        .insert(parsedLeave)
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
      <LeaveForm form={form} onSubmit={onSubmit} t={t} isEditForm={true} />
    </div>
  );
};

export default EditLeave;
