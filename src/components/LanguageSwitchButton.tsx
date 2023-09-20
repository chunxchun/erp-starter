import { Button } from "@/components/ui/button";
import i18n from "@/i18n";

const LanguageSwitchButton = () => {
  // const [language, setLanguage] = React.useState('hk');

  return (
    // switch language button
    <span className="flex flex-row justify-center items-center">
      <Button variant={'ghost'}
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        EN
      </Button>
      /
      <Button variant={'ghost'}
        onClick={() => {
          i18n.changeLanguage("hk");
        }}
      >
        中
      </Button>
    </span>
  );
};

export default LanguageSwitchButton;
