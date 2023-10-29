import { supabase } from "@/supabaseClient";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import type { Customer } from "@/types/Customer";

const ShowCustomer = () => {
  const { id: customerId } = useParams();
  if (!customerId) return;

  const { t } = useTranslation("show_customer");
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const getCustomer = async () => {
      const { data } = await supabase
        .from("customers")
        .select()
        .eq("id", customerId)
        .single();

      setCustomer(data as unknown as Customer);
    };

    getCustomer();
  }, []);

  return (
    <div>
      <Card className="min-w-[350px] w-[60%] mx-auto my-8">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start px-8 space-y-4">
          <p>
            <Label>{t("name")}</Label>
            <span className="ml-4 font-semibold">{customer?.name}</span>
          </p>
          <p>
            <Label>{t("phone")}</Label>
            <span className="ml-4 font-semibold">{customer?.phone}</span>
          </p>
          <p>
            <Label>{t("email")}</Label>
            <span className="ml-4 font-semibold">{customer?.email}</span>
          </p>
          <p>
            <Label>{t("address")}</Label>
            <span className="ml-4 font-semibold">{customer?.address}</span>
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(-1)} variant={"outline"}>
            {t("back")}
          </Button>
          <Button onClick={() => navigate(`/customers/edit/${customerId}`)}>
            {t("edit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowCustomer;
