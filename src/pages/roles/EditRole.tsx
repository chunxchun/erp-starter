import * as z from "zod";

import type { Role, RoleInsert } from "@/types/Role";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import RoleForm from "./RoleForm";

const RoleSchema = z.custom<Role>();

const EditRole = () => {
  const { id: roleId } = useParams();
  if (!roleId) return;

  const { t } = useTranslation("edit_role");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Role>({
    resolver: zodResolver(RoleSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("roles")
        .select()
        .eq("id", roleId)
        .single();

      return data as unknown as Role;
    },
  });

  const onSubmit = async (role: RoleInsert) => {
    const parsedRole = {
      ...role,
    };
console.log(
  'parsedRole', parsedRole
)
    try {
      const { error } = await supabase
        .from("roles")
        .update(parsedRole)
        .eq("id", roleId);

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
      <RoleForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditRole;
