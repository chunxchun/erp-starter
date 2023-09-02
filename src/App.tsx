import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./supabaseClient";

type Employee = {
  id: string;
  hk_id: string;
};
function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    supabase
      .from("employees")
      .select()
      .then((result) => setEmployees(result.data as unknown as Employee[]));
  }, []);

  return (
    <>
      <h1 className="font-bold underline">HIHI</h1>
      {employees.map((e) => (
        <p>{e.hk_id}</p>
      ))}
    </>
  );
}

export default App;
