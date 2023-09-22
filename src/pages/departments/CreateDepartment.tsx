import * as z from "zod";

import type { Employee, EmployeeInsert } from "@/types/Employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import DepartmentForm from "./DepartmentForm";

import { Department, DepartmentInsert } from "@/types/Department";

const DepartmentSchema = z.custom<Department>();

const CreateDepartment = () => {
  const { t } = useTranslation("create_department");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Department>({
    resolver: zodResolver(DepartmentSchema),
    defaultValues: {
      // id: "",
      name: "",
    },
  });

  const onSubmit = async (department: DepartmentInsert) => {
    try {
      const { error } = await supabase
        .from("departments")
        .insert(department)
        .select();
      if (error) throw error;
      toast({ title: t("submit_success_msg") });
      navigate(-1);
    } catch (err) {
      toast({ title: t("submit_fail_msg"), description: `${JSON.stringify(err)}` });
    }
  };

  return (
    <div>
      <DepartmentForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateDepartment;
