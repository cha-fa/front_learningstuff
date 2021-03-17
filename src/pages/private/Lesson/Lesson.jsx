import { useEffect } from "react";
import PrivateRoute from "components/PrivateRoute";
import { Switch, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row, Nav, Container } from "react-bootstrap";
import LessonContent from "./LessonContent/LessonContent";
import LessonForum from "./LessonForum/LessonForum";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";
import LessonVideo from "./LessonVideo/LessonVideo";
import LessonQuizz from "./LessonQuizz/LessonQuizz";

const Lesson = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { courseId, chapterId, lessonId } = useParams();
  const { t } = useTranslation("lesson");
  const { data, get } = useFetch();

  useEffect(() => {
    get(`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`);
  }, [lessonId]);

  return (
    <Container fluid className="Lesson">
      {data && (
        <Row>
          <Col md={5}>
            <Nav variant="tabs">
              <Nav.Item>
                <Link
                  className="nav-link"
                  to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/content`}
                >
                  {t("content")}
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="nav-link"
                  to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/forum`}
                >
                  {t("forum")}
                </Link>
              </Nav.Item>
            </Nav>

            <p>
              {" "}
              {t("title")}:{data.title}
            </p>
            <Switch>
              <PrivateRoute
                currentUser={currentUser}
                path="/courses/:courseId/chapters/:chapterId/lessons/:lessonId/content"
              >
                <LessonContent content={data.lesson_content} />
              </PrivateRoute>
              <PrivateRoute
                currentUser={currentUser}
                path="/courses/:courseId/chapters/:chapterId/lessons/:lessonId"
                exact
              >
                <LessonContent content={data.lesson_content} />
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
            <LessonVideo video={data.lesson_video} />
          </Col>
          <Col md={1}>
            <LessonQuizz questions={data.questions} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Lesson;
