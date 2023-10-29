import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import CustomerForm from "./CustomerForm";

import { Customer, CustomerInsert } from "@/types/Customer";

const CustomerSchema = z.custom<Customer>();

const CreateCustomer = () => {
  const { t } = useTranslation("create_customer");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Customer>({
    resolver: zodResolver(CustomerSchema),
    defaultValues: {
      // id: "",
      name: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = async (customer: CustomerInsert) => {
    const parsedCustomer = {
      ...customer,
    };

    try {
      const { error } = await supabase
        .from("customers")
        .insert(parsedCustomer)
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
      <CustomerForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateCustomer;
