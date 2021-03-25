import { Link, useHistory } from "react-router-dom";
import "./CourseCard.scss";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import paymentFetch from "hooks/paymentFetch";
<<<<<<< HEAD
=======
import { useTranslation } from "react-i18next";
>>>>>>> master

const CourseCard = ({ course, subscribed, currentLesson }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { title, price_in_cents, id } = course;
  const { newPayment } = paymentFetch();
<<<<<<< HEAD
  const history = useHistory();
=======
  const { t } = useTranslation();
>>>>>>> master

  const handleSubscription = (e) => {
    e.preventDefault();
    if (currentUser){
      newPayment(price_in_cents, id);
    } else {
      history.push("/login");
    }
  };

  return (
    <Link to={`/courses/${course.id}`}>
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
                  to={`/courses/${course.id}/chapters/${currentLesson.chapter_id}/lessons/${currentLesson.id}`}
                >
                  {t("course:continue")}{" "}
                  {(currentUser &&
                    course.progress_states.find(
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
