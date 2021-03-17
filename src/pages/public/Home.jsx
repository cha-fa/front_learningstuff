import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["translation", "lesson"]);

  return (
    <div className="Home">
      <h1>{t("title")}</h1>
      <h1>{t("lesson:content")}</h1>
    </div>
  );
};

export default Home;
