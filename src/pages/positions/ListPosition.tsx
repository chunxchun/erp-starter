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

import type { Position } from "@/types/Position";

const ListPosition = () => {
  const { t } = useTranslation("list_position");
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    supabase
      .from("positions")
      .select()
      .then((result) => setPositions(result.data as unknown as Position[]));
  }, []);

  return (
    <Table>
      {/* <TableCaption>Positions</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">{t("name")}</TableHead>
          <TableHead className="text-center">{t("actions")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {positions.map((position, idx) => (
          <TableRow key={position.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{position.name}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/positions/${position.id}`}>{t("details")}</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/positions/edit/${position.id}`}>
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

export default ListPosition;
