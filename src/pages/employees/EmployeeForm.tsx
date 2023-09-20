import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import type { Employee, EmployeeInsert } from "@/types/Employee";
import { UseFormReturn } from "react-hook-form";

import DateFormField from "@/components/formFields/DateFormField";
import EmailFormField from "@/components/formFields/EmailFormField";
import TextFormField from "@/components/formFields/TextFormField";
import { TFunction } from "i18next";
import SelectFormField from "@/components/formFields/SelectFormField";

interface Props {
  form: UseFormReturn<Employee>;
  onSubmit: (employee: EmployeeInsert) => Promise<void>;
  t: TFunction<"create_employee">;
}

const EmployeeForm = ({ form, onSubmit, t }: Props) => {
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
              name={"last_name"}
              label={t("last_name")}
              placeholder={t("last_name")}
            />
            <TextFormField
              control={form.control}
              name={"first_name"}
              label={t("first_name")}
              placeholder={t("first_name")}
            />
            <TextFormField
              control={form.control}
              name={"nickname"}
              label={t("nickname")}
              placeholder={t("nickname")}
            />
            <EmailFormField
              control={form.control}
              name={"email"}
              label={t("email")}
              placeholder={t("email")}
            />
            <TextFormField
              control={form.control}
              name={"address"}
              label={t("address")}
              placeholder={t("address")}
            />
            <TextFormField
              control={form.control}
              name={"hk_id"}
              label={t("hk_id")}
              placeholder={t("hk_id")}
            />
            <TextFormField
              control={form.control}
              name={"mobile"}
              label={t("mobile")}
              placeholder={t("mobile")}
            />
            <DateFormField
              control={form.control}
              name={"birthday"}
              label={t("birthday")}
              placeholder={t("birthday")}
            />
            <SelectFormField
              control={form.control}
              name={"role"}
              label={t("role")}
              resources="roles"
              selectKey="name"
              placeholder={t("select_form_placeholder")}
            />
            <SelectFormField
              control={form.control}
              name={"supervisor_id"}
              label={t("supervisor")}
              resources="employees"
              selectKey="nickname"
              placeholder={t("select_form_placeholder")}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">{t("submit")}</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default EmployeeForm;
