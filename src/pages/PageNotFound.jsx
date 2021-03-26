import LottieAnimation from "lottie";
import anim404 from "assets/animations/anim404.json";
import UseAnimations from "react-useanimations";
import alertTriangle from "react-useanimations/lib/alertTriangle";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const PageNotFound = () => {
  const { t } = useTranslation();
  const currentUser = useSelector((state) => state.auth.currentUser);
  let history = useHistory();

  return (
    <div className="PageNotFound text-center">
      <Row>
        <Col>
          <LottieAnimation lotti={anim404} height={600} width={600} />
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <p>
            {t("this_page_doesnt_exists") + " "}
            <span role="img" aria-label="confused_face">
              🤨
            </span>
          </p>
          <UseAnimations
            animation={alertTriangle}
            size={500}
            strokeColor="#ff8a00"
          />
        </Col>
      </Row>
      {(currentUser && (
        <ButtonPrimary
          sizeClass="medium mb-5"
          label={t("back_to_profile")}
          handleClick={() => history.push("/profile")}
        />
      )) || (
        <ButtonPrimary
          sizeClass="medium mb-5"
          label={t("back_to_home")}
          handleClick={() => history.push("/")}
        />
      )}
    </div>
  );
};

export default PageNotFound;




