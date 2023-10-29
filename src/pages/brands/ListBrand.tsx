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

import type { Brand } from "@/types/Brand";

const ListBrand = () => {
  const { t } = useTranslation("list_brand");
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    supabase
      .from("brands")
      .select()
      .then((result) => setBrands(result.data as unknown as Brand[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Brands</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {brands.map((brand, idx) => (
          <TableRow key={brand.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{brand.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/brands/${brand.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/brands/edit/${brand.id}`}>
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

export default ListBrand;
