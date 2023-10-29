import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/supabaseClient";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import type { Job } from "@/types/Job";

const ListJob = () => {
  const { t } = useTranslation("jobs", { keyPrefix: "list_job" });
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    supabase
      .from("jobs")
      .select(`*, departments(name)`)
      .then((result) => setJobs(result.data as unknown as Job[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Jobs</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("department_id")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job, idx) => (
          <TableRow key={job.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{job.name}</TableCell>
            <TableCell>{job.departments.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/jobs/${job.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/jobs/edit/${job.id}`}>{t("edit")}</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListJob;
