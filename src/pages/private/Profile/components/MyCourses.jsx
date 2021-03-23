import useFetch from "hooks/useFetch";
import Subscription from "pages/private/Subscription/Subscription";
import CourseCard from "components/CourseCard/CourseCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import paymentFetch from "hooks/paymentFetch";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";

const MyCourses = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { data, error, isLoading, patch, get } = useFetch();

  const { newPayment } = paymentFetch();

  const handlePayment = () => {
    newPayment(4000, "TEST ARGUMENT LEARNING PATH");
  };

  useEffect(() => {
    if (currentUser) get(`/users/${currentUser.id}/subscriptions`);
  }, [currentUser]);

  return (
    <div className="MyCourses d-flex flex-wrap">
      {data &&
        data.map((subscription) => {
          if (subscription.learning_path.is_single_course) {
            return (
              <CourseCard
                key={subscription.id}
                course={subscription.learning_path}
                subscribed={true}
              />
            );
          }
          return (
            <LearningPathCard
              key={subscription.learning_path.id}
              learningPath={subscription.learning_path}
              subscribed={true}
            />
          );
        })}
      <button onClick={handlePayment}>TEST PAIEMENT</button>
    </div>
  );
};

export default MyCourses;
// .coursesList{
//   margin-left: 10%;
//   margin-right: 10%;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// }
