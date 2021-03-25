import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./CourseCard.scss";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import paymentFetch from "hooks/paymentFetch";
import { useDispatch } from "react-redux";
import { Card, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useTranslation } from "react-i18next";
import defaultcover from "assets/covers/defaultcover.svg";
import { displayWarning } from "stores/flashmessages/flashMiddleware";

const CourseCard = ({ course, subscribed, noSubscription }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const { title, price_in_cents, id, slug, description, categories } = course;
  const { newPayment } = paymentFetch();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubscription = (e) => {
    if (isLogged) {
      e.preventDefault();
      newPayment(price_in_cents, id);
    } else {
      dispatch(displayWarning(t("need_to_login")));
      history.push("/login");
    }
  };

  const getProgress = (course) => {
    return course.progress_states.find(
      (progress) => progress.user_id === currentUser.id
    );
  };

  const handleRead = (current_lesson) => {
    history.push(
      `/courses/${course.id}/chapters/${current_lesson.chapter_id}/lessons/${current_lesson.id}`
    );
  };

  const getImage = (slug) => {
    let url;
    try {
      url = require(`assets/covers/${slug}.svg`);
      return url.default;
    } catch (error) {
      url = null;
      return url;
    }
  };

  return (
    <Card className="CourseCard m-3 ">
      {!noSubscription && !subscribed && (
        <Card.Header className="LearningPathCard__header">
          {price_in_cents && price_in_cents / 100} €
        </Card.Header>
      )}
      <Card.Img
        variant="top"
        src={getImage(slug) ? getImage(slug) : defaultcover}
        alt="IMAGE"
      />

      <Card.Title className="LearningPathCard__title">{title}</Card.Title>
      <Card.Body className="d-flex flex-column">
        {!subscribed && <Card.Text>{description}</Card.Text>}
        {subscribed && (
          <>
            <h5>
              <Badge
                pill
                className="m-2"
                variant={
                  getProgress(course).progression === 100 ? "success" : "info"
                }
                key={course.id}
              >
                {t("your_progress")} : {getProgress(course).progression || 0} %
              </Badge>
            </h5>
            <ButtonPrimary
              handleClick={() => handleRead(getProgress(course).current_lesson)}
              sizeClass="medium"
              label={t("read_course")}
            />
          </>
        )}
        {!noSubscription && !subscribed && (
          <div className="d-flex justify-content-center w-100 mt-auto">
            <ButtonPrimary
              className="ButtonPrimary"
              sizeClass="medium"
              label={t("register_to_course")}
              handleClick={handleSubscription}
            />
          </div>
        )}
      </Card.Body>
      <Card.Footer className="LearningPathCard__categories text-muted">
        {categories &&
          categories.map((category) => (
            <Badge pill className="mx-2" variant="secondary" key={category.id}>
              {category.title}
            </Badge>
          ))}
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;
