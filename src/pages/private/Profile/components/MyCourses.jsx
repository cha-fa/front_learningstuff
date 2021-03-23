import useFetch from "hooks/useFetch";
import Subscription from "pages/private/Subscription/Subscription";
import CourseCard from "components/CourseCard/CourseCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MyCourses = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { data, error, isLoading, patch, get } = useFetch();

  useEffect(() => {
    if (currentUser) get(`/users/${currentUser.id}/subscriptions`);
  }, [currentUser]);

  console.log(data);
  return (
    <div className="MyCourses d-flex flex-wrap">
      {data &&
        data.map((subscription) => {
          return (
            <CourseCard
              key={subscription.id}
              course={subscription.learning_path}
              subscribed={true}
            />
          );
        })}
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
