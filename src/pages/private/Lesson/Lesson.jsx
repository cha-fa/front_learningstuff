import { useEffect, useState } from "react";
import PrivateRoute from "components/PrivateRoute";
import { Switch, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row, Nav, Container, Modal, Button } from "react-bootstrap";
import LessonContent from "./LessonContent/LessonContent";
import LessonForum from "./LessonForum/LessonForum";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";
import LessonVideo from "./LessonVideo/LessonVideo";
import LessonQuizz from "./LessonQuizz/LessonQuizz";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";

const Lesson = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { courseId, chapterId, lessonId } = useParams();
  const { t } = useTranslation("lesson");
  const { data, get } = useFetch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    get(`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`);
  }, []);

  return (
    <Container fluid className="Lesson">
      {data && (
        <Row>
          <Col md={6}>
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
                <LessonForum
                  ids={{
                    course: courseId,
                    chapter: chapterId,
                    lesson: lessonId,
                  }}
                />
              </PrivateRoute>
            </Switch>
          </Col>
          <Col md={6}>
            {" "}
            <Row>
              <LessonVideo url={data.video_url} />
            </Row>
            <Row>
              <Col>ETAPES VIDEO</Col>
              <Col>
                <ButtonPrimary
                  handleClick={handleShow}
                  className="ButtonPrimary medium"
                  label={t("do_quizz")}
                />
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>{data.title}</Modal.Header>
                  <LessonQuizz
                    ids={{
                      course: courseId,
                      chapter: chapterId,
                      lesson: lessonId,
                    }}
                  />
                </Modal>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Lesson;
