import * as z from "zod";

import type { Employee, EmployeeInsert } from "@/types/Employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";

const EmployeeSchema = z.custom<Employee>();

const CreateEmployee = () => {
  const { t } = useTranslation("create_employee");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Employee>({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: {
      // id: "",
      hk_id: "",
      first_name: "",
      last_name: "",
      nickname: "",
      birthday: "",
      address: "",
      mobile: "",
      email: "",
    },
  });


  const onSubmit = async (employee: EmployeeInsert) => {
    // console.log(employee);
    const parsedEmployee = {
      ...employee,
      birthday: new Date(employee.birthday).toLocaleDateString("en-CA"), // YYYY-MM-DD
    };
    // console.log(parsedEmployee);

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

export default CreateEmployee;
