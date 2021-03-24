import { Link } from "react-router-dom";
import "./CourseCard.scss";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import paymentFetch from "hooks/paymentFetch";
import { useDispatch } from "react-redux";

const CourseCard = ({ course, subscribed }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { title, price_in_cents, id } = course;
  const { post, error } = useFetch();
  const { newPayment } = paymentFetch();

  const handleSubscription = (e) => {
    e.preventDefault();
    newPayment(price_in_cents, id);
  };

  return (
    <Link to={`/courses/${course.id}`}>
      <div className="CourseCard">
        <div className="header">
          {!subscribed && (
            <Button
              onClick={handleSubscription}
              className="ButtonPrimary"
              size="sm"
            >
              {price_in_cents && price_in_cents / 100} € Subscribe Now!
            </Button>
          )}
        </div>
        <div className="bottomCard">
          <p>{title}</p>
          {error && <h2 style={{ color: "black" }}>{error}</h2>}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
