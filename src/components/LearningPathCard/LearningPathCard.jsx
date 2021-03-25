import React from "react";
import { useHistory } from "react-router-dom";
import "./LearningPathCard.scss";
import { useSelector } from "react-redux";
import { Card, ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useTranslation } from "react-i18next";
import defaultcover from "assets/covers/defaultcover.svg";

const LearningPathCard = ({ learningPath, subscribed }) => {
  const {
    title,
    price_in_cents,
    id,
    description,
    courses,
    categories,
    slug,
  } = learningPath;

  const history = useHistory();
  const { t } = useTranslation();

  const handleLearnMore = () => {
    history.push(`/learning_paths/${slug}`);
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
    <Card className="LearningPathCard m-3 ">
      <Card.Header className="LearningPathCard__header">
        {price_in_cents && price_in_cents / 100} €
      </Card.Header>
      <Card.Img
        variant="top"
        src={getImage(slug) ? getImage(slug) : defaultcover}
        alt="IMAGE"
      />

      <Card.Title className="LearningPathCard__title">{title}</Card.Title>
      <Card.Body className="d-flex flex-column">
        <Card.Text>{description}</Card.Text>

        <ListGroup className="list-group-flush">
          <p>{t("includes_courses")} :</p>
          {courses.map((course) => (
            <ListGroupItem key={course.id}>{course.title}</ListGroupItem>
          ))}
        </ListGroup>
        <div className="d-flex justify-content-center w-100 mt-auto">
          <ButtonPrimary
            className="ButtonPrimary"
            sizeClass="medium"
            label={t("learn_more")}
            handleClick={handleLearnMore}
          />
        </div>
      </Card.Body>
      <Card.Footer className="LearningPathCard__categories text-muted">
        {categories.map((category) => (
          <Badge pill className="mx-2" variant="secondary" key={category.id}>
            {category.title}
          </Badge>
        ))}
      </Card.Footer>
    </Card>
  );
};

export default LearningPathCard;
