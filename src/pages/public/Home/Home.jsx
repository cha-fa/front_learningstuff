import JumbotronDisplay from "components/JumbotronDisplay/JumbotronDisplay";
import { useTranslation } from "react-i18next";
import BeATeacher from "./components/BeATeacher/BeATeacher";
import HomeAchivement from "./components/HomeAchivement/HomeAchivement";
import HomePresentation from "./components/HomePresentation/HomePresentation";
import Pricing from "./components/Pricing/Pricing";
import { useSelector } from "react-redux";

const Home = () => {
  const { t } = useTranslation(["common", "translation", "lesson"]);
  const currentUser = useSelector((state) => state.auth.currentUser);

  console.log("currentu ser", currentUser);
  return (
    <div className="Home">
      <JumbotronDisplay />
      <HomePresentation />
      <HomeAchivement />
      {!currentUser && <BeATeacher />}
    </div>
  );
};

export default Home;
