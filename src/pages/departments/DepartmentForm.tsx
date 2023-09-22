import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import type { Department, DepartmentInsert } from "@/types/Department";
import { UseFormReturn } from "react-hook-form";

import TextFormField from "@/components/formFields/TextFormField";
import { TFunction } from "i18next";

interface Props {
  form: UseFormReturn<Department>;
  onSubmit: (Department: DepartmentInsert) => Promise<void>;
  t: TFunction<"create_department">;
}

const DepartmentForm = ({ form, onSubmit, t }: Props) => {
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
          </CardContent>
          <CardFooter>
            <Button type="submit">{t("submit")}</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default DepartmentForm;
