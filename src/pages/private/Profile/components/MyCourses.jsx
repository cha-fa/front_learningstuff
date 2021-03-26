import useFetch from "hooks/useFetch";
import { useHistory } from "react-router-dom";
import CourseCard from "components/CourseCard/CourseCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LearningPathCard from "components/LearningPathCard/LearningPathCard";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { useTranslation } from "react-i18next";
import { Row } from "react-bootstrap";
import Loading from "components/Loading";

const MyCourses = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { data, get, isLoading } = useFetch();
  const { t } = useTranslation();
  const history = useHistory();

  const getCourseSubscriptions = () => {
    return data.filter(
      (subscription) => subscription.learning_path.is_single_course
    ).length;
  };

  const getLearningPathSubscriptions = () => {
    return data.filter(
      (subscription) => !subscription.learning_path.is_single_course
    ).length;
  };

  useEffect(() => {
    if (currentUser) {
      get(`/users/${currentUser.id}/subscriptions`);
    }
  }, [currentUser]);

  return (
    <Row className="MyCourses d-flex justify-content-center">
      {isLoading && <Loading />}
      {data && data.length > 0 && (
        <p>
          {t("you_are_registered")} {getLearningPathSubscriptions()} {t("path")}{" "}
          {t("and")} {getCourseSubscriptions()} {t("course")}
        </p>
      )}
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
                  width="100%"
                  imgHeight="200px"
                />
              )) || (
              <LearningPathCard
                key={subscription.learning_path.id}
                learningPath={subscription.learning_path}
                subscribed={true}
                width="100%"
                imgHeight="200px"
              />
            )
        )) ||
        (!isLoading && (
          <>
            <h3>{t("no_subscriptions")}</h3>
            <ButtonPrimary
              sizeClass="lg large"
              label={t("choose_a_course")}
              handleClick={() => history.push("/learning_paths")}
            />
          </>
        ))}
    </Row>
  );
};

export default MyCourses;
