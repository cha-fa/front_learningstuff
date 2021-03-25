import { Link } from "react-router-dom";
import "./LearningPathCard.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useTranslation } from "react-i18next";

const LearningPathCard = ({ learningPath, subscribed }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { title, price_in_cents, id } = learningPath;
  const [displayCourses, setDisplayCourses] = useState(false);

  const { t } = useTranslation();
  const toggleDisplay = () =>
    displayCourses ? setDisplayCourses(false) : setDisplayCourses(true);

  const dataSubscription = {
    learning_path_id: id,
  };

  const handleSubscription = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        onClick={toggleDisplay}
        className="LearningPathsCard"
        style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
      >
        <div className="header p-2">
          {!subscribed && (
            <Button
              onClick={handleSubscription}
              className="ButtonPrimary LearningPathsCard__subscribe"
              size="sm"
            >
              {price_in_cents && price_in_cents / 100} € {t("subscribe")}
            </Button>
          )}
        </div>
        <div className="bottomCard">
          <p>{title}</p>
        </div>
      </div>

      {displayCourses && (
        <ul className="courses">
          {learningPath.courses.map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <li className="courseLine">{course.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LearningPathCard;
