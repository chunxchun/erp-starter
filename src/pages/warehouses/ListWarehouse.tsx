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

import type { Warehouse } from "@/types/Warehouse";

const ListWarehouse = () => {
  const { t } = useTranslation("list_warehouse");
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);

  useEffect(() => {
    supabase
      .from("warehouses")
      .select()
      .then((result) => setWarehouses(result.data as unknown as Warehouse[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Warehouses</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {warehouses.map((warehouse, idx) => (
          <TableRow key={warehouse.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{warehouse.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/warehouses/${warehouse.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/warehouses/edit/${warehouse.id}`}>
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

export default ListWarehouse;
