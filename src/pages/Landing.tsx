import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useTranslation } from "react-i18next";
import { supabase } from "../supabaseClient";

const Landing = () => {
  const { t } = useTranslation("landing");

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>{t("title")}</h1>
      <p>{t("desc")}</p>
      <div>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    </div>
  );
};

export default Landing;
