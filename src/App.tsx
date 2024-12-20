import { useTranslation } from "react-i18next";

function Example() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {/* Dịch text đơn giản */}
      <h1>{t("welcome")}</h1>

      {/* Dịch với tham số */}
      <p>{t("greeting", { name: "John" })}</p>

      {/* Dịch nested key */}
      <p>{t("about.title")}</p>

      {/* Nút chuyển đổi ngôn ngữ */}
      <div>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
        <button onClick={() => i18n.changeLanguage("vi")}>Tiếng Việt</button>
      </div>
    </div>
  );
}
