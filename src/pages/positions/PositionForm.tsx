import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import type { Position, PositionInsert } from "@/types/Position";
import { UseFormReturn } from "react-hook-form";

import TextFormField from "@/components/formFields/TextFormField";
import { TFunction } from "i18next";
import SelectFormField from "@/components/formFields/SelectFormField";
import { useNavigate } from "react-router-dom";

interface Props {
  form: UseFormReturn<Position>;
  onSubmit: (Position: PositionInsert) => Promise<void>;
  t: TFunction<"create_position">;
}

const PositionForm = ({ form, onSubmit, t }: Props) => {
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
              name={"department_id"}
              label={t("department")}
              resources="departments"
              selectKey="name"
              placeholder={t("select_form_placeholder")}
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

export default PositionForm;
