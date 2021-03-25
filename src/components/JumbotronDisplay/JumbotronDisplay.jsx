import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import "./JumbotronDisplay.scss";
import { useTranslation } from "react-i18next";

const JumbotronDisplay = () => {
  const { t } = useTranslation();
  return (
    <>
      <Jumbotron className="image-jumbotron">
        <div className="text-center">
          <h2 className="display-4">{t("learn_a_lot_of_stuff")}</h2>
          <h3>{t("in_charge_of_future")}</h3>
          <p className="lead">
            <Link to="/learning_paths">
              <ButtonSecondary sizeClass="medium" label={t("get_started")} />
            </Link>
          </p>
        </div>
      </Jumbotron>
    </>
  );
};

export default JumbotronDisplay;
