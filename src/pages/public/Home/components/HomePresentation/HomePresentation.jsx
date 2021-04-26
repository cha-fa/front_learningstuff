import "./HomePresentation.scss";
import { Col, Row } from "react-bootstrap";
import { RiComputerLine } from "react-icons/ri";
import { GiClick, GiTeacher } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomePresentation = () => {
  const { t } = useTranslation(["home"]);

  return (
    <section className="HomePresentation pt-5">
      <Row className="Company_Cores p-0 m-0">
        <Col>
          <GiClick size={100} className="HomePresentation__icon mb-3" />
          <h3>{t("UnlimitedTitle")}</h3>
          <p>{t("UnlimitedText")}</p>
        </Col>
        <Col>
          <GiTeacher size={100} className="HomePresentation__icon mb-3" />
          <h3>{t("ExpertTeacherTitle")}</h3>
          <p>{t("ExpertTeacherText")}</p>
        </Col>
        <Col>
          <RiComputerLine size={100} className="HomePresentation__icon mb-3" />
          <h3>{t("AnywhereTitle")}</h3>
          <p>{t("AnywhereText")}</p>
        </Col>
      </Row>
      <Row className="Courses_CTA p-0 m-0">
        <Col md={6} className="d-none d-lg-block abstract-form">
          {
            <svg
              height="437"
              viewBox="0 0 773 437"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-8.99052 836.918C-240.325 836.785 -427.751 649.533 -427.619 418.678C-427.486 187.823 -239.845 0.78547 -8.51085 0.918203C222.824 1.05094 772.553 119.759 772.421 350.614C772.288 581.469 222.344 837.051 -8.99052 836.918Z"
                fill="#b5dfe2"
              />
            </svg>
          }
        </Col>
        <Col xs={12} md={6} className="text-center">
          <h2 className="display-4 mb-3">{t("learn_a_lot_of_stuff")}</h2>
          <h4 className="mb-3">{t("in_charge_of_future")}</h4>
          <Link
            to="/courses"
            className="ButtonPrimary mt-3 mb-5 cta btn btn-lg"
          >
            {t("home:ctacourses")}
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default HomePresentation;
