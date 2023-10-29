import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

import JobForm from "./JobForm";

import type { Job, JobInsert } from "@/types/Job";

const JobSchema = z.custom<Job>();

const CreateJob = () => {
  const { t } = useTranslation("jobs", { keyPrefix: "create_job" });
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<Job>({
    resolver: zodResolver(JobSchema),
    defaultValues: {
      // id: "",
      name: "",
      desc: "",
      department_id: "",
      type: "", // full-time or part-time
    },
  });

  const onSubmit = async (job: JobInsert) => {
    const parsedJob = {
      ...job,
    };

    try {
      const { error } = await supabase
        .from("jobs")
        .insert(parsedJob)
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
      <JobForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default CreateJob;
