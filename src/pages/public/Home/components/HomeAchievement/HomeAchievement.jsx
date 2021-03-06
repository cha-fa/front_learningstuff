import "./HomeAchievement.scss";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaHandsHelping, FaUserGraduate } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { BsAward } from "react-icons/bs";
const HomeAchievement = () => {
  const { t } = useTranslation(["home"]);
  return (
    <section className="HomeAchievement pt-5">
      <Row className="p-0 m-0 text-center">
        <Col>
          <FaUserGraduate size={100} className="HomeAchivement__icon" />
          <h3>5 679</h3>
          <p>{t("NumberStudent")}</p>
        </Col>
        <Col>
          <FaHandsHelping size={100} className="HomeAchivement__icon" />
          <h3>10 000</h3>
          <p>{t("NumberVisit")}</p>
        </Col>
        <Col>
          <BsAward size={100} className="HomeAchivement__icon" />
          <h3>#10</h3>
          <p>{t("Rank")}</p>
        </Col>
      </Row>
    </section>
  );
};

export default HomeAchievement;
