import JumbotronDisplay from "components/JumbotronDisplay/JumbotronDisplay";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["translation", "lesson"]);

  return (
    <div className="Home">
      <JumbotronDisplay />
      <h1>{t("title", { name: "Monsieur" })}</h1>
    </div>
  );
};

export default Home;