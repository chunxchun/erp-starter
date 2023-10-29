import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import type { Logistic, LogisticInsert } from "@/types/Logistic";
import { UseFormReturn } from "react-hook-form";

import TextFormField from "@/components/formFields/TextFormField";
import { TFunction } from "i18next";
import { useNavigate } from "react-router-dom";
import SelectFormField from "@/components/formFields/SelectFormField";
import DateFormField from "@/components/formFields/DateFormField";
import NumberFormField from "@/components/formFields/NumberFormField";

interface Props {
  form: UseFormReturn<Logistic>;
  onSubmit: (Logistic: LogisticInsert) => Promise<void>;
  t: TFunction<"create_logistic">;
}

const LogisticForm = ({ form, onSubmit, t }: Props) => {
  const navigate = useNavigate();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="min-w-[350px] w-[60%] mx-auto my-8">
          <CardHeader>
            <CardTitle>{t("title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <TextFormField
              control={form.control}
              name={"name"}
              label={t("name")}
              placeholder={t("name")}
            />
            <SelectFormField
              control={form.control}
              name={"product_id"}
              label={t("product")}
              resources="products"
              selectKey="name"
              placeholder={t("select_form_placeholder")}
            />
            <SelectFormField
              control={form.control}
              name={"warehouse_id"}
              label={t("warehouse")}
              resources="warehouses"
              selectKey="name"
              placeholder={t("select_form_placeholder")}
            />
            {/* type */}

            {/* quantity change */}
            <NumberFormField
              control={form.control}
              name={"quantity_change"}
              label={t("quantity_change")}
              placeholder={t("quantity_change")}
            />
            <DateFormField
              control={form.control}
              name={"date"}
              label={t("date")}
              placeholder={t("date")}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => navigate(-1)}
            >
              {t("cancel")}
            </Button>
            <Button type="submit">{t("submit")}</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default LogisticForm;
