import "./BeATeacher.scss";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
    
const BeATeacher = () => {
  const { t } = useTranslation(["home"]);
    
  return (
    <div className="BeATeacher">
      <Row className="pt-5">
        <Col md={6} className="d-none d-lg-block">
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
        <Col xs={12} md={6} className="text-center">
          <h2>
            {t("BeATeacherTitle")}
          </h2>
          <p className="pb-3">
            {t("MentorText")}
          </p>
          <a href="mailto:admin@learning.com" className="ButtonPrimary cta btn btn-lg">{t("BeATeacherButton")}</a>
        </Col>
      </Row>
    </div>
    );
};
    
export default BeATeacher;