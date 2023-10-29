import SignOutButton from "@/components/SignOutButton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/supabaseClient";
import { User } from "@supabase/supabase-js";

const Settings = () => {
  const { t } = useTranslation("settings");
  const [user, setUser] = useState<null | User>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      console.log(data);
      setUser(data.user);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Settings</h1>
      <h2>user:{user? user.email : 'n/a'}</h2>
      <SignOutButton />
    </div>
  );
};

export default Settings;
