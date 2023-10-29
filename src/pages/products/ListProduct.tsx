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

import type { Product } from "@/types/Product";

const ListProduct = () => {
  const { t } = useTranslation("list_product");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    supabase
      .from("products")
      .select()
      .then((result) => setProducts(result.data as unknown as Product[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Products</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, idx) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/products/${product.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/products/edit/${product.id}`}>
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

export default ListProduct;
