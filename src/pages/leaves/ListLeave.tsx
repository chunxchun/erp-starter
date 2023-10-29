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

import type { Leave } from "@/types/Leave";

const ListLeave = () => {
  const { t } = useTranslation("leaves", {keyPrefix: 'list_leave'});
  const [leaves, setLeaves] = useState<Leave[]>([]);

  useEffect(() => {
    supabase
      .from("leaves")
      .select(`*, employees(nickname)`)
      .then((result) => {
        setLeaves(result.data as unknown as Leave[]);
      });
  }, []);

  return (
    <Table>
      {/* <TableCaption>Leaves</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("employee_id")}</TableHead>
          <TableHead className="text-center">{t("start_date")}</TableHead>
          <TableHead className="text-center">{t("start_time")}</TableHead>
          <TableHead className="text-center">{t("end_date")}</TableHead>
          <TableHead className="text-center">{t("end_time")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaves?.map((leave, idx) => (
          <TableRow key={leave.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{leave.employees.nickname}</TableCell>
            <TableCell>{leave.start_date}</TableCell>
            <TableCell>{leave.start_time}</TableCell>
            <TableCell>{leave.end_date}</TableCell>
            <TableCell>{leave.end_time}</TableCell>

            <TableCell>
              <Button variant={"link"}>
                <Link to={`/leaves/${leave.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/leaves/edit/${leave.id}`}>{t("edit")}</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListLeave;
