import useFetch from "hooks/useFetch";
import CourseCard from "components/CourseCard/CourseCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";

const MyCourses = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { data, get } = useFetch();

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
    </div>
  );
};

export default MyCourses;
