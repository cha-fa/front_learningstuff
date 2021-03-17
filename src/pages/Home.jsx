import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation(); 

  return (
    <div className="Home">
      <h1>{t("title", {name:"Monsieur"})}</h1>
    </div>
  );
};

export default Home;
