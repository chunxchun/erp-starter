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

import type { Logistic } from "@/types/Logistic";

const ListLogistic = () => {
  const { t } = useTranslation("list_logistic");
  const [logistics, setLogistics] = useState<Logistic[]>([]);

  useEffect(() => {
    supabase
      .from("logistics")
      .select()
      .then((result) => setLogistics(result.data as unknown as Logistic[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Logistics</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logistics.map((logistic, idx) => (
          <TableRow key={logistic.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{logistic.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/logistics/${logistic.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/logistics/edit/${logistic.id}`}>
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

export default ListLogistic;
