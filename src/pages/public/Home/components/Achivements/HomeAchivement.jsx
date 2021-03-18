import "./HomeAchivement.scss";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaHandsHelping, FaUserGraduate } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { BsAward } from "react-icons/bs";
const HomeAchivement = () => {
  const { t } = useTranslation(["home"]);
  return (
    <section className="HomeAchivement">
      <Row className="p-5 text-center">
        <Col>
          <FaUserGraduate size={100} className="HomeAchivement__icon" />
          <h3>{t("UnlimitedTitle")}</h3>
          <p>{t("UnlimitedText")}</p>
        </Col>
        <Col>
          <GiDiploma size={100} className="HomeAchivement__icon" />
          <h3>{t("ExpertTeacherTitle")}</h3>
          <p>{t("ExpertTeacherText")}</p>
        </Col>
        <Col>
          <FaHandsHelping size={100} className="HomeAchivement__icon" />
          <h3>{t("AnywhereTitle")}</h3>
          <p>{t("AnywhereText")}</p>
        </Col>
        <Col>
          <BsAward size={100} className="HomeAchivement__icon" />
          <h3>{t("AnywhereTitle")}</h3>
          <p>{t("AnywhereText")}</p>
        </Col>
      </Row>
    </section>
  );
};

export default HomeAchivement;
