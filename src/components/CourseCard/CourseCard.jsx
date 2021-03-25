import { Link } from "react-router-dom";
import "./CourseCard.scss";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import paymentFetch from "hooks/paymentFetch";
import { useTranslation } from "react-i18next";

const CourseCard = ({ course, subscribed, currentLesson }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { title, price_in_cents, id } = course;
  const { newPayment } = paymentFetch();
  const { t } = useTranslation();

  const handleSubscription = (e) => {
    e.preventDefault();
    newPayment(price_in_cents, id);
  };

  return (
    <Link to={`/courses/${course.courses[0].id}`}>
      <div className="CourseCard">
        <div className="header">
          {(!subscribed && (
            <Button
              onClick={handleSubscription}
              className="ButtonPrimary"
              size="sm"
            >
              {price_in_cents && price_in_cents / 100} € Subscribe Now!
            </Button>
          )) || (
            <>
              {currentLesson && (
                <Link
                  to={`/courses/${course.courses[0].id}/chapters/${currentLesson.chapter_id}/lessons/${currentLesson.id}`}
                >
                  {t("course:continue")}{" "}
                  {(currentUser &&
                    course.courses[0].progress_states.find(
                      (e) => e.user_id === currentUser.id
                    ).progression) ||
                    0}
                  %
                </Link>
              )}
            </>
          )}
        </div>
        <div className="bottomCard">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
