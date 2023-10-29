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

import type { Customer } from "@/types/Customer";

const ListCustomer = () => {
  const { t } = useTranslation("list_customer");
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    supabase
      .from("customers")
      .select()
      .then((result) => setCustomers(result.data as unknown as Customer[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Customers</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer, idx) => (
          <TableRow key={customer.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{customer.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/customers/${customer.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/customers/edit/${customer.id}`}>
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

export default ListCustomer;
