import { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Nav, Container, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { fetchCurrentUser } from "stores/authentication/authMiddleware";
import { useHistory } from "react-router-dom";
import useFetch from "hooks/useFetch";
import LessonVideo from "./LessonVideo/LessonVideo";
import LessonQuizz from "./LessonQuizz/LessonQuizz";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import ChapterProgressBar from "./ChapterProgressBar.jsx/ChapterProgressBar";
import LessonVideoSteps from "./LessonVideo/LessonVideoSteps";
import LessonRouter from "./LessonRouter";

import "./Lesson.scss";

const Lesson = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const { courseId, chapterId, lessonId } = useParams();
  const { t } = useTranslation("lesson");
  const { data, get, error, post } = useFetch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let history = useHistory();

  const handleNextLesson = () => {
    history.push(
      `/courses/${courseId}/chapters/${data.next_lesson.chapter_id}/lessons/${data.next_lesson.id}`
    );
  };

  const validateLesson = () => {
    post(
      `/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/results`,
      { quizz_result: null }
    );
    history.push("/profile/mycourses");
  };

  useEffect(() => {
    get(`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`);
    dispatch(fetchCurrentUser(token));
  }, [lessonId]);

  const getProgressLesson = () => {
    return currentUser.progress_lessons.find(
      (progress) => progress.lesson_id === Number(lessonId)
    );
  };

  return (
    <Container fluid className="Lesson pb-5">
      {error && (
        <h1>
          {error}
          <Link to={"/profile"}>{t("back_to_profile")}</Link>
        </h1>
      )}
      {data && currentUser && (
        <>
          <ChapterProgressBar currentLesson={data} onClick={handleClose} />
          <Row>
            <Col md={6}>
              <Nav
                variant="tabs"
                defaultActiveKey={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/content`}
              >
                <Nav.Item>
                  <NavLink
                    className="nav-link"
                    to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/content`}
                  >
                    {t("content")}
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink
                    className="nav-link"
                    to={`/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}/forum`}
                  >
                    {t("forum")}
                  </NavLink>
                </Nav.Item>
              </Nav>

              <LessonRouter
                ids={{
                  course: courseId,
                  chapter: chapterId,
                  lesson: lessonId,
                }}
                data={data}
                currentUser={currentUser}
              />
            </Col>
            <Col md={6}>
              {" "}
              <Row>
                <LessonVideo url={data.video_url} />
              </Row>
              <Row>
                <Col>
                  <LessonVideoSteps />
                </Col>
                <Col>
                  {(!data.questions.length && data.next_lesson && (
                    <ButtonPrimary
                      handleClick={handleNextLesson}
                      className="ButtonPrimary large"
                      label={t("go_to_next_lesson")}
                    />
                  )) ||
                    (!data.questions.length && !data.next_lesson && (
                      <>
                        <p className="text-center">{t("course_is_over")}</p>
                        <ButtonPrimary
                          handleClick={validateLesson}
                          className="ButtonPrimary large text-center"
                          label={t("validate_back_to_profile")}
                        />
                      </>
                    ))}

                  {(data.questions.length > 0 && !getProgressLesson() && (
                    <>
                      <p className="text-center">{t("need_to_answer_quizz")}</p>
                      <ButtonPrimary
                        handleClick={handleShow}
                        className="ButtonPrimary large"
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
                          handleClose={handleClose}
                        />
                      </Modal>
                    </>
                  )) ||
                    (data.questions.length > 0 && getProgressLesson() && (
                      <>
                        <p className="text-center">{t("already_answered")}</p>
                        <p className="text-center">
                          {t("result_obtained")} :{" "}
                          {getProgressLesson().quizz_result}
                        </p>
                        <ButtonPrimary
                          handleClick={handleShow}
                          className="ButtonPrimary large"
                          label={t("redo_quizz")}
                        />

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>{data.title}</Modal.Header>
                          <LessonQuizz
                            ids={{
                              course: courseId,
                              chapter: chapterId,
                              lesson: lessonId,
                            }}
                            handleClose={handleClose}
                          />
                        </Modal>
                      </>
                    ))}
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Lesson;
