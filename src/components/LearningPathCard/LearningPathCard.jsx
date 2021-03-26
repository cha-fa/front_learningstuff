import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./LearningPathCard.scss";
import { Card, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useTranslation } from "react-i18next";
import defaultcover from "assets/covers/defaultcover.svg";
import { useSelector } from "react-redux";

const LearningPathCard = ({ learningPath, subscribed, width, imgHeight }) => {
  const {
    title,
    price_in_cents,
    id,
    description,
    courses,
    categories,
    slug,
  } = learningPath;
  const currentUser = useSelector((state) => state.auth.currentUser);

  const history = useHistory();
  const { t } = useTranslation();

  const handleLearnMore = () => {
    history.push(`/learning_paths/${slug}`);
  };

  const handleRead = (current_lesson, course_id) => {
    if (current_lesson) {
      history.push(
        `/courses/${course_id}/chapters/${current_lesson.chapter_id}/lessons/${current_lesson.id}`
      );
    }
  };

  const getProgress = (course) => {
    return course.progress_states.find(
      (progress) => progress.user_id === currentUser.id
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
    <Card className="LearningPathCard m-3" style={{ width: `${width}` }}>
      {!subscribed && (
        <Card.Header className="LearningPathCard__header">
          {price_in_cents && price_in_cents / 100} €
        </Card.Header>
      )}
      <Card.Img
        variant="top"
        src={getImage(slug) ? getImage(slug) : defaultcover}
        alt="IMAGE"
        style={{ height: `${imgHeight}` }}
      />

      <Card.Title className="LearningPathCard__title">{title}</Card.Title>
      <Card.Body className="d-flex flex-column">
        {!subscribed && <Card.Text>{description}</Card.Text>}

        <ListGroup className="list-group-flush">
          <p>{t("includes_courses")} :</p>
          {courses.map((course) => (
            <ListGroupItem key={course.id}>
              {course.title}
              {subscribed && (
                <>
                  <h5>
                    <Badge
                      pill
                      className="mx-2"
                      variant={
                        getProgress(course).progression === 100
                          ? "success"
                          : "info"
                      }
                      key={course.id}
                    >
                      {t("your_progress")} :{" "}
                      {getProgress(course).progression || 0} %
                    </Badge>
                  </h5>
                  <ButtonPrimary
                    handleClick={() =>
                      handleRead(getProgress(course).current_lesson, course.id)
                    }
                    sizeClass="medium"
                    label={t("read_course")}
                  />
                </>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
        {!subscribed && (
          <div className="d-flex justify-content-center w-100 mt-auto">
            <ButtonPrimary
              className="ButtonPrimary"
              sizeClass="medium"
              label={t("learn_more")}
              handleClick={handleLearnMore}
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

export default LearningPathCard;
