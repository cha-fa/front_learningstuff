import Jumbotron from "components/Jumbotron/Jumbotron";
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation(); 

  return (
    <div className="Home">
      <Jumbotron/>
      <h1>{t("title", {name:"Jeremy"})}</h1>
    </div>
  );
};

export default Home;
