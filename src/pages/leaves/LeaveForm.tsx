import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import type { Leave, LeaveInsert } from "@/types/Leave";
import { UseFormReturn } from "react-hook-form";

import DateFormField from "@/components/formFields/DateFormField";
import EmailFormField from "@/components/formFields/EmailFormField";
import TextFormField from "@/components/formFields/TextFormField";
import { TFunction } from "i18next";
import SelectFormField from "@/components/formFields/SelectFormField";
import { useNavigate } from "react-router-dom";

import { TimePicker } from "@/components/ui/date-time-picker/time-picker";
import TimeFormField from "@/components/formFields/TimeFormField";

interface Props {
  form: UseFormReturn<Leave>;
  onSubmit: (leave: LeaveInsert) => Promise<void>;
  t: TFunction<"create_leave">;
  isEditForm?: boolean;
}

const LeaveForm = ({ form, onSubmit, t, isEditForm = false }: Props) => {
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
            <DateFormField
              control={form.control}
              name={"start_date"}
              label={t("start_date")}
              placeholder={t("start_date")}
            />
            <TimeFormField
              control={form.control}
              name={"start_time"}
              label={t("start_time")}
              isEditForm={isEditForm}
            />
            <DateFormField
              control={form.control}
              name={"end_date"}
              label={t("end_date")}
              placeholder={t("end_date")}
            />
            <TimeFormField
              control={form.control}
              name={"end_time"}
              label={t("end_time")}
              isEditForm
            />
            <TextFormField
              control={form.control}
              name={"reason"}
              label={t("reason")}
              placeholder={t("reason")}
            />
            <SelectFormField
              control={form.control}
              name={"type"}
              label={t("type")}
              resources="leave_types"
              selectKey="name"
              placeholder={t("type")}
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

export default LeaveForm;
