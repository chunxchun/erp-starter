import * as z from "zod";

import type { Department, DepartmentInsert } from "@/types/Department";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";

const DepartmentSchema = z.custom<Department>();

const EditDepartment = () => {
  const { id: departmentId } = useParams();
  if (!departmentId) return;

  const { t } = useTranslation("edit_department");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Department>({
    resolver: zodResolver(DepartmentSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("departments")
        .select()
        .eq("id", departmentId)
        .single();

      return data as unknown as Department;
    },
  });

  const onSubmit = async (department: DepartmentInsert) => {
    const parsedDepartment = {
      ...department,
    };

    try {
      const { error } = await supabase
        .from("departments")
        .insert(parsedDepartment)
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
      <DepartmentForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditDepartment;
