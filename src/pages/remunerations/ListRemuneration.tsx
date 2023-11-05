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

import type { Remuneration } from "@/types/Remuneration";

const ListRemuneration = () => {
  const { t } = useTranslation("remunerations", {
    keyPrefix: "list_remuneration",
  });
  const [remunerations, setRemunerations] = useState<Remuneration[]>([]);

  useEffect(() => {
    supabase
      .from("remunerations")
      .select(`*, jobs(name), employees(nickname)`)
      .then((result) =>
        setRemunerations(result.data as unknown as Remuneration[])
      );
  }, []);

  return (
    <Table>
      {/* <TableCaption>Remunerations</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {remunerations.map((remuneration, idx) => (
          <TableRow key={remuneration.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{remuneration.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/remunerations/${remuneration.id}`}>
                  {t("details")}
                </Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/remunerations/edit/${remuneration.id}`}>
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

export default ListRemuneration;
