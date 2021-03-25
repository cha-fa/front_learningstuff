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

const CourseCard = ({ course, subscribed, noSubscription, currentLesson }) => {
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
      {(!noSubscription && !currentLesson && (
        <Card.Header className="LearningPathCard__header">
          {price_in_cents && price_in_cents / 100} €
        </Card.Header>
      )) ||
        (currentLesson && (
          <>
            <Link
              to={`/courses/${course.id}/chapters/${currentLesson.chapter_id}/lessons/${currentLesson.id}`}
            >
              {t("course:continue")}{" "}
              {(currentUser &&
                course.progress_states.find((e) => e.user_id === currentUser.id)
                  .progression) ||
                0}
              %
            </Link>
          </>
        ))}
      <Card.Img
        variant="top"
        src={getImage(slug) ? getImage(slug) : defaultcover}
        alt="IMAGE"
      />

      <Card.Title className="LearningPathCard__title">{title}</Card.Title>
      <Card.Body className="d-flex flex-column">
        <Card.Text>{description}</Card.Text>

        {!noSubscription && !currentLesson && (
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
