import JumbotronDisplay from "components/JumbotronDisplay/JumbotronDisplay";
import { useTranslation } from "react-i18next";
import BeATeacher from "./components/BeATeacher/BeATeacher";
import HomeAchivement from "./components/HomeAchivement/HomeAchivement";
import HomePresentation from "./components/HomePresentation/HomePresentation";


const Home = () => {
  const { t } = useTranslation(["common", "translation", "lesson"]);

  return (
    <div className="Home">
      <JumbotronDisplay />
      <HomePresentation />
      <HomeAchivement />
      <BeATeacher/>
    </div>
  );
};

export default Home;
