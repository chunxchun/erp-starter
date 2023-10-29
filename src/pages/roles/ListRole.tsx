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

import type { Role } from "@/types/Role";

const ListRole = () => {
  const { t } = useTranslation("list_role");
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    supabase
      .from("roles")
      .select()
      .then((result) => setRoles(result.data as unknown as Role[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Roles</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {roles.map((role, idx) => (
          <TableRow key={role.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{role.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/roles/${role.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/roles/edit/${role.id}`}>
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

export default ListRole;
