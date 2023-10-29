import * as z from "zod";

import type { Customer, CustomerInsert } from "@/types/Customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import CustomerForm from "./CustomerForm";

const CustomerSchema = z.custom<Customer>();

const EditCustomer = () => {
  const { id: customerId } = useParams();
  if (!customerId) return;

  const { t } = useTranslation("edit_customer");
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Customer>({
    resolver: zodResolver(CustomerSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("customers")
        .select()
        .eq("id", customerId)
        .single();

      return data as unknown as Customer;
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
      <CustomerForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditCustomer;
