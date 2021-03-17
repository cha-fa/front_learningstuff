import { useEffect } from "react";
import PrivateRoute from "components/PrivateRoute";
import { Switch, useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import LessonContent from "./LessonContent/LessonContent";
import LessonForum from "./LessonForum/LessonForum";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";
import LessonVideo from "./LessonVideo/LessonVideo";
import LessonQuizz from "./LessonQuizz/LessonQuizz";

const Lesson = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { courseId, chapterId, lessonId } = useParams();
  const { t } = useTranslation(["translation", "lesson"]);
  const { data, error, isLoading, get } = useFetch();

  useEffect(() => {
    get(`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`);
  }, [lessonId]);

  return (
    <Row className="Lesson">
      {data && (
        <>
          <Col md={5}>
            <Row className="justify-content-center align-items-center navbar">
              <NavLink
                className="nav-link"
                to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/content`}
              >
                {t("lesson:content")}
              </NavLink>
              <NavLink
                className="nav-link"
                to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/forum`}
              >
                {t("lesson:forum")}
              </NavLink>
            </Row>
            <p>
              {" "}
              {t("lesson:title")}:{data.lesson.title}
            </p>
            <Switch>
              <PrivateRoute
                currentUser={currentUser}
                path="/courses/:courseId/chapters/:chapterId/lessons/:lessonId/content"
              >
                <LessonContent content={data.content} />
              </PrivateRoute>
              <PrivateRoute
                currentUser={currentUser}
                path="/courses/:courseId/chapters/:chapterId/lessons/:lessonId"
                exact
              >
                <LessonContent content={data.content} />
              </PrivateRoute>
              <PrivateRoute
                currentUser={currentUser}
                component={LessonForum}
                path="/courses/:courseId/chapters/:chapterId/lessons/:lessonId/forum"
              >
                <LessonForum comments={data.comments} />
              </PrivateRoute>
            </Switch>
          </Col>
          <Col md={5}>
            {" "}
            <LessonVideo video={data.video} />
          </Col>
          <Col md={2}>
            <LessonQuizz questions={data.questions} />
          </Col>
        </>
      )}
    </Row>
  );
};

export default Lesson;
