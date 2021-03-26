import { useEffect } from "react";
import { useSelector } from "react-redux";
import  { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { displaySuccess, displayError } from "stores/flashmessages/flashMiddleware";
import JumbotronDisplay from "components/JumbotronDisplay/JumbotronDisplay";
import HomeAchievement from "./components/HomeAchievement/HomeAchievement";
import HomePresentation from "./components/HomePresentation/HomePresentation";
import BeATeacher from "./components/BeATeacher/BeATeacher";

const Home = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { search } = useLocation();
  const { t } = useTranslation("home");
  const dispatch = useDispatch();

  useEffect(() => {
    if (search === "?payment_successful") {
      dispatch(displaySuccess(t("payment:success")));
    } else if (search === "?payment_canceled") {
      dispatch(displayError(t("payment:cancel")));
    }
  }, [search]);

  return (
    <div className="Home">
      <JumbotronDisplay />
      <HomePresentation />
      <HomeAchievement />
      {!currentUser && <BeATeacher />}
    </div>
  );
};

export default Home;
