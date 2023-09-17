import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./supabaseClient";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

type Employee = {
  id: string;
  hk_id: string;
};
function App() {
  const { t } = useTranslation();

  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    supabase
      .from("employees")
      .select()
      .then((result) => setEmployees(result.data as unknown as Employee[]));
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="font-bold underline">{t("Welcome to React")}</h1>
      {employees.map((e) => (
        <p>{e.hk_id}</p>
      ))}
      <h1>{t("Button")}</h1>
      <Button>Test</Button>
    </>
  );
}

export default App;
