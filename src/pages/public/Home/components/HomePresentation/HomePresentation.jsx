import React from "react";
import "./HomePresentation.scss";
import { Col, Row } from "react-bootstrap";
import { FaAtlassian } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { GiClick, GiTeacher } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";

const HomePresentation = () => {
  const { t } = useTranslation(["home"]);

  return (
    <section className="HomePresentation">
      <Row className="p-5">
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
      <Row className="pt-5">
        <Col>
          <svg
            height="437"
            viewBox="0 0 773 437"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-8.99052 836.918C-240.325 836.785 -427.751 649.533 -427.619 418.678C-427.486 187.823 -239.845 0.78547 -8.51085 0.918203C222.824 1.05094 772.553 119.759 772.421 350.614C772.288 581.469 222.344 837.051 -8.99052 836.918Z"
              fill="#EFE4CF"
            />
          </svg>
        </Col>
        <Col className="pb-5 text-left">
          <h2>
            {t("AnywhereTitle")}
            <br />
            <span className="HomePresentation__bold">
            {t("ExpertTeacherTitle")}
            </span>
          </h2>
          <p className="pt-5 pb-5">
            {t("AnywhereText")} 
            {t("ExpertTeacherText2")}
          </p>
          <Link to="/login">
            <ButtonPrimary sizeClass="medium" label="Get Started" />
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default HomePresentation;
