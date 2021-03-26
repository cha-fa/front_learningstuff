import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";
import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";
import { useDispatch } from "react-redux";
import { displayWarning } from "stores/flashmessages/flashMiddleware";
import paymentFetch from "hooks/paymentFetch";
import { useSelector } from "react-redux";
import CourseCard from "components/CourseCard/CourseCard";
import { Row } from "react-bootstrap";
import "./LearningPaths.scss";

const LearningPathShow = () => {
  const { data, error, get } = useFetch();
  const { pathSlug } = useParams();
  const { t } = useTranslation("common");
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const history = useHistory();
  const { newPayment } = paymentFetch();

  const handleSubscription = (price, id) => {
    if (isLogged) {
      newPayment(price, id);
    } else {
      dispatch(displayWarning(t("need_to_login")));
      history.push("/login");
    }
  };

  useEffect(() => {
    get(`/learning_paths/${pathSlug}`);
    return;
  }, []);

  return (
    <div className="LearningPathShow">
      <div className="LearningPaths__header d-flex flex-column align-items-center">
        {data && (
          <>
            <h2>
              {t("learning_path")} : {data.title}
            </h2>
            <p>{data.description}</p>
            <p>
              {t("unique_price")} : {data.price_in_cents / 100} €
            </p>
            <ButtonSecondary
              handleClick={() =>
                handleSubscription(data.price_in_cents, data.id)
              }
              label={t("register_now")}
              sizeClass="large"
            />
          </>
        )}
      </div>
      <h3>{t("courses_included_are")} :</h3>
      <Row className="d-flex justify-content-center">
        {data &&
          data.courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              noSubscription="true"
              width="40%"
              imgHeight="300px"
            />
          ))}
      </Row>
    </div>
  );
};

export default LearningPathShow;
