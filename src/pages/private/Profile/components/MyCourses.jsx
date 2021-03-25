import useFetch from "hooks/useFetch";
import { useHistory } from "react-router-dom";
import CourseCard from "components/CourseCard/CourseCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useTranslation } from "react-i18next";

const MyCourses = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { data, get } = useFetch();
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    if (currentUser) get(`/users/${currentUser.id}/subscriptions`);
  }, [currentUser]);

  return (
    <div className="MyCourses d-flex flex-wrap">
      {(data &&
        data.length > 0 &&
        data.map(
          (subscription) =>
            (subscription.learning_path.courses &&
              subscription.learning_path.is_single_course && (
                <CourseCard
                  key={subscription.id}
                  course={subscription.learning_path.courses[0]}
                  subscribed={true}
                />
              )) || (
              <LearningPathCard
                key={subscription.learning_path.id}
                learningPath={subscription.learning_path}
                subscribed={true}
              />
            )
        )) || (
        <>
          <h3>{t("no_subscriptions")}</h3>
          <ButtonPrimary
            sizeClass="lg large"
            label={t("choose_a_course")}
            handleClick={() => history.push("/learning_paths")}
          />
        </>
      )}
    </div>
  );
};

export default MyCourses;
