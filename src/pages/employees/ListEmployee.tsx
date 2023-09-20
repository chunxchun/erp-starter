import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { supabase } from "@/supabaseClient";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Employee = {
  id: string;
  hk_id: string;
  first_name: string;
  last_name: string;
  nickname: string;
  birthday: string;
  address: string;
  mobile: string;
  email: string;
};

const ListEmployee = () => {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    supabase
      .from("employees")
      .select()
      .then((result) => setEmployees(result.data as unknown as Employee[]));
  }, []);
  if (employees.length) {
    console.log(employees[0].birthday);
  }
  return (
    <Table>
      {/* <TableCaption>Employees</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">#</TableHead>
          <TableHead className="text-center">Name</TableHead>
          <TableHead className="text-center">Address</TableHead>
          <TableHead className="text-center">Email</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee, idx) => (
          <TableRow key={employee.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{employee.nickname}</TableCell>
            <TableCell>{employee.birthday}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>
              <Button variant={"link"}>
                <Link to={`/employees/${employee.id}`}>Details</Link>
              </Button>
              <Button variant={"link"}>
                <Link to={`/employees/edit/${employee.id}`}>Edit</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListEmployee;
