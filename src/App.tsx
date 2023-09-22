import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Outlet, redirect } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import type { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) =>
      setSession(session)
    );
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    // return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
    redirect('/landing')
  }
  
  return (
    <MainLayout>
      <Button>Test</Button>
      <Outlet />
    </MainLayout>
  );
}

export default App;
