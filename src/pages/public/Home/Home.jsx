import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import  { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { displayError } from "stores/flashmessages/flashMiddleware";
import Fade from "react-reveal/Fade";
import JumbotronDisplay from "./components/JumbotronDisplay/JumbotronDisplay";
import HomeAchievement from "./components/HomeAchievement/HomeAchievement";
import HomePresentation from "./components/HomePresentation/HomePresentation";
import BeATeacher from "./components/BeATeacher/BeATeacher";
import ScrollTop from "./components/ScrollTop/ScrollTop";

const Home = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { search } = useLocation();
  const { t } = useTranslation("home");
  const dispatch = useDispatch();

  useEffect(() => {
    if (search === "?payment_canceled") {
      dispatch(displayError(t("payment:cancel")));
    }
  }, [search]);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div className="Home">
      <Fade left= {isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <JumbotronDisplay />
      </Fade>
      <Fade left= {isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <HomePresentation />
      </Fade>
      <HomeAchievement />
      {currentUser && <BeATeacher />}
      <ScrollTop />
    </div>
  );
};

export default Home;
