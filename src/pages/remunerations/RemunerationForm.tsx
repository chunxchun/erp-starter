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
            <TextFormField
              control={form.control}
              name={"name"}
              label={t("name")}
              placeholder={t("name")}
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

export default RemunerationForm;
