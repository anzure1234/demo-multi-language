import { useTranslation } from "react-i18next";

export const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <div>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
        <button onClick={() => i18n.changeLanguage("vi")}>Tiếng Việt</button>
      </div>

      <div>
        <h2>{t("about.title")}</h2>
        <p>{t("about.description")}</p>
      </div>
    </div>
  );
};
