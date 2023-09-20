import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import { useTranslation } from "react-i18next";

type Role = {
  id: string;
  name: string;
};

const ListRole = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const { t } = useTranslation("list_role");

  useEffect(() => {
    supabase
      .from("roles")
      .select()
      .then((result) => {
        console.log(result);
        setRoles(result.data as unknown as Role[])
      });
  }, []);

  return (
    <>
      <h1>{t("title")}</h1>
      {roles.map((e) => (
        <p key={e.id}>{e.name}</p>
      ))}
    </>
  );
};

export default ListRole;
