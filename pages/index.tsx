import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
// import { i18n, Link, withNamespaces } from "../i18n"; // We replace next/link with the one provide by next-i18next, this helps with locale subpaths
const HomePage: React.FunctionComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t("hello-world")}</h1>
      <button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "hi" : "en")
        }
      >
        {t("change-language")}
      </button>
    </div>
  );
};

export default HomePage;
