import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useTranslation } from 'react-i18next';
import { supabase } from '../supabaseClient';

const Landing = () => {
  const {t} = useTranslation('landing')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('desc')}</p>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </div>
  )
}

export default Landing