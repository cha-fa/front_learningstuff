import Jumbotron from "components/Jumbotron/Jumbotron";
import { useTranslation } from "react-i18next";
import HomeAchivement from "./components/Achivements/HomeAchivement";
import HomePresentation from "./components/HomePresentation/HomePresentation";
import Pricing from "./components/Pricing/Pricing";

const Home = () => {
  const { t } = useTranslation(["common", "translation", "lesson"]);

  return (
    <div className="Home">
      <Jumbotron />
      <HomePresentation />
      <HomeAchivement />
      <Pricing />
      <h1>{t("title", { name: "Monsieur" })}</h1>
    </div>
  );
};

export default Home;
