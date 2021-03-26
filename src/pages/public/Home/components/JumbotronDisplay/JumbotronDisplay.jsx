import { useTranslation } from "react-i18next";
import { Jumbotron, Row, Col } from "react-bootstrap";
import LottieAnimation from "lottie";
import animjumbotron from "assets/animations/animjumbotron.json";
import { Link } from "react-router-dom";
import "./JumbotronDisplay.scss";

const JumbotronDisplay = () => {
  const { t } = useTranslation();
  return (
    <Jumbotron className="JumbotronDisplay">
      <div>
        <Row className="p-0 m-0">
          <Col
            xs={12}
            md={6}
            className="Jumbotron_col d-flex flex-column justify-content-center align-items-center text-center"
          >
            <h2 className="display-4">{t("learn_a_lot_of_stuff")}</h2>
            <h3>{t("in_charge_of_future")}</h3>
            <div className="my-5">
              <Link
                to="/learning_paths"
                className="ButtonSecondary cta btn btn-lg"
              >
                {t("home:ctalearningpaths")}
              </Link>
            </div>
          </Col>
          <Col md={6} className="Jumbotron_col d-none d-lg-block">
            <LottieAnimation lotti={animjumbotron} />
          </Col>
        </Row>
      </div>
    </Jumbotron>
  );
};

export default JumbotronDisplay;
