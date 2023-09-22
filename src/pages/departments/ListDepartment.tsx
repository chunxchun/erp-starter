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

import type { Department } from "@/types/Department";

const ListDepartment = () => {
  const { t } = useTranslation("list_department");
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    supabase
      .from("departments")
      .select()
      .then((result) => setDepartments(result.data as unknown as Department[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Departments</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {departments.map((department, idx) => (
          <TableRow key={department.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{department.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/departments/${department.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/departments/edit/${department.id}`}>
                  {t("edit")}
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListDepartment;
