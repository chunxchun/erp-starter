import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import type { Remuneration, RemunerationInsert } from "@/types/Remuneration";
import { UseFormReturn } from "react-hook-form";

import TextFormField from "@/components/formFields/TextFormField";
import { TFunction } from "i18next";
import { useNavigate } from "react-router-dom";
import SelectFormField from "@/components/formFields/SelectFormField";
import DateFormField from "@/components/formFields/DateFormField";
import NumberFormField from "@/components/formFields/NumberFormField";

interface Props {
  form: UseFormReturn<Remuneration>;
  onSubmit: (Remuneration: RemunerationInsert) => Promise<void>;
  t: TFunction<"create_remuneration">;
}

const RemunerationForm = ({ form, onSubmit, t }: Props) => {
  const navigate = useNavigate();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="min-w-[350px] w-[60%] mx-auto my-8">
          <CardHeader>
            <CardTitle>{t("title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <SelectFormField
              control={form.control}
              name={"employee_id"}
              label={t("employee_id")}
              resources="employees"
              selectKey="nickname"
              placeholder={t("select_form_placeholder")}
            />
            <SelectFormField
              control={form.control}
              name={"job_id"}
              label={t("job_id")}
              resources="jobs"
              selectKey="name"
              placeholder={t("select_form_placeholder")}
            />
            <DateFormField
              control={form.control}
              name={"start_date"}
              label={t("start_date")}
              placeholder={t("start_date")}
            />
            <DateFormField
              control={form.control}
              name={"end_date"}
              label={t("end_date")}
              placeholder={t("end_date")}
            />
            <NumberFormField
              control={form.control}
              name={"entitled_sick_leave"}
              label={t("entitled_sick_leave")}
              placeholder={t("entitled_sick_leave")}
            />
            <NumberFormField
              control={form.control}
              name={"entitled_annual_leave"}
              label={t("entitled_annual_leave")}
              placeholder={t("entitled_annual_leave")}
            />
            <NumberFormField
              control={form.control}
              name={"entitled_maternity_leave"}
              label={t("entitled_maternity_leave")}
              placeholder={t("entitled_maternity_leave")}
            />
            <SelectFormField
              control={form.control}
              name={"type"}
              label={t("type")}
              resources="job_types"
              selectKey="name"
              placeholder={t("select_form_placeholder")} />
            <SelectFormField
              control={form.control}
              name={"payment_mode"}
              label={t("payment_mode")}
              resources="payment_mode"
              selectKey="name"
              placeholder={t("select_form_placeholder")} />
            <NumberFormField
              control={form.control}
              name={"amount"}
              label={t("amount")}
              placeholder={t("amount")} />
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
    </Form >
  );
};

export default RemunerationForm;
