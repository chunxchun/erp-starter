import { Button } from "@/components/ui/button";
import { supabase } from "../supabaseClient";
import { useTranslation } from "react-i18next";
import { Navigate, redirect } from "react-router-dom";

const SignOutButton = () => {
  const { t } = useTranslation("sign_out_button");
  const handleSignOut = async () => {
    console.log("sign out");
    const { error } = await supabase.auth.signOut();
    console.log("success log out");
    if (error) {
      console.log(error);
    }
    return redirect("/landing");
  };

  return <Button onClick={handleSignOut}>{t("sign_out")}</Button>;
};

export default SignOutButton;
