import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import RoleForm from "./RoleForm";

import type { Role, RoleInsert } from "@/types/Role";

const RoleSchema = z.custom<Role>();

const CreateRole = () => {
  const { t } = useTranslation("create_role");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Role>({
    resolver: zodResolver(RoleSchema),
    defaultValues: {
      // id: "",
      name: "",
    },
  });

  const onSubmit = async (role: RoleInsert) => {
    const parsedRole = {
      ...role,
    };

    try {
      const { error } = await supabase
        .from("roles")
        .insert(parsedRole)
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
      <RoleForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateRole;
