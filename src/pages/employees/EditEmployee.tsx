import * as z from "zod";

import type { Employee, EmployeeInsert } from "@/types/Employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";

const EmployeeSchema = z.custom<Employee>();

const EditEmployee = () => {
  const { id: employeeId } = useParams();
  if (!employeeId) return;

  const { t } = useTranslation("employees", { keyPrefix: "edit_employee" });
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<Employee>({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("employees")
        .select()
        .eq("id", employeeId)
        .single();

      return data as unknown as Employee;
    },
  });

  const onSubmit = async (employee: EmployeeInsert) => {
    const parsedEmployee = {
      ...employee,
      birthday: new Date(employee.birthday).toLocaleDateString("en-CA"), // YYYY-MM-DD
    };

    try {
      const { error } = await supabase
        .from("employees")
        .insert(parsedEmployee)
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
      <EmployeeForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditEmployee;
