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

import type { Supplier } from "@/types/Supplier";

const ListSupplier = () => {
  const { t } = useTranslation("list_supplier");
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    supabase
      .from("suppliers")
      .select()
      .then((result) => setSuppliers(result.data as unknown as Supplier[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Suppliers</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {suppliers.map((supplier, idx) => (
          <TableRow key={supplier.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{supplier.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/suppliers/${supplier.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/suppliers/edit/${supplier.id}`}>
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

export default ListSupplier;
