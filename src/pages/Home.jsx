import React from "react";
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t, i18n } = useTranslation(); 

  return (
    <div className="Home">
      <h1>{t('title')}</h1>
    </div>
  );
};

export default Home;
