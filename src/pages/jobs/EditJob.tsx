import * as z from "zod";

import type { Job, JobInsert } from "@/types/Job";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import JobForm from "./JobForm";

const JobSchema = z.custom<Job>();

const EditJob = () => {
  const { id: jobId } = useParams();
  if (!jobId) return;

  const { t } = useTranslation("jobs", { keyPrefix: "edit_job" });
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<Job>({
    resolver: zodResolver(JobSchema),
    defaultValues: async () => {
      const { data } = await supabase
        .from("jobs")
        .select()
        .eq("id", jobId)
        .single();

      return data as unknown as Job;
    },
  });

  const onSubmit = async (job: JobInsert) => {
    const parsedJob = {
      ...job,
      birthday: new Date(job.birthday).toLocaleDateString("en-CA"), // YYYY-MM-DD
    };

    try {
      const { error } = await supabase
        .from("jobs")
        .insert(parsedJob)
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
      <JobForm form={form} onSubmit={onSubmit} t={t} />
    </div>
  );
};

export default EditJob;
