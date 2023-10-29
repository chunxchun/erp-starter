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

import type { Category } from "@/types/Category";

const ListCategory = () => {
  const { t } = useTranslation("list_category");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    supabase
      .from("categories")
      .select()
      .then((result) => setCategories(result.data as unknown as Category[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Categories</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category, idx) => (
          <TableRow key={category.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/categories/${category.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/categories/edit/${category.id}`}>
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

export default ListCategory;
