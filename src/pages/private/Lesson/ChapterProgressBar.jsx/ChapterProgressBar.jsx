import { useEffect } from "react";
import { Col, Row, Nav, Container, Modal, Button } from "react-bootstrap";
import {
  AiFillCheckCircle,
  AiOutlineCheck,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import "./ChapterProgressBar.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "stores/authentication/authMiddleware";
import useFetch from "hooks/useFetch";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ChapterProgressBar = ({ currentLesson, handleClose }) => {
  const user = useSelector((state) => state.auth.currentUser);
  const token = useSelector((state) => state.auth.token);
  const { data, get } = useFetch();
  const dispatch = useDispatch();
  const { t } = useTranslation("lesson");
  useEffect(() => {
    dispatch(fetchCurrentUser(token));
  }, [currentLesson]);

  useEffect(() => {
    get(
      `/courses/${currentLesson.chapter.course_id}/chapters/${currentLesson.chapter.id}/lessons`
    );
  }, [currentLesson]);
  console.log("a", user?.read_lesson);
  return (
    <Row className="ChapterProgressBar d-flex justify-content-around align-items-center mb-5 mt-2">
      <div className="ChapterProgressBar__Previous">
        {currentLesson.previous_lesson && (
          <>
            <AiOutlineArrowLeft style={{ color: "white" }} />
            <Link
              onClick={handleClose}
              to={`/courses/${currentLesson.chapter.course_id}/chapters/${currentLesson.previous_lesson.chapter_id}/lessons/${currentLesson.previous_lesson.id}`}
            >
              {t("previous_lesson")}
            </Link>
          </>
        )}
      </div>
      <div className="ChapterProgressBar__Icons">
        {data &&
          user &&
          data.map(
            (lesson) =>
              (lesson.id === currentLesson.id && (
                <AiFillCheckCircle
                  className="ms-auto"
                  style={{ color: "white" }}
                  size={40}
                />
              )) ||
              (user.read_lessons.some(
                (read_lesson) => read_lesson.id === lesson.id
              ) && <AiOutlineCheck style={{ color: "white" }} size={40} />) || (
                <AiFillCheckCircle
                  className="ChapterProgressBar__unread"
                  size={40}
                />
              )
          )}
      </div>
      <div className="ChapterProgressBar__Next">
        {currentLesson.next_lesson &&
          user &&
          user.read_lessons.some(
            (read_lesson) =>
              (currentLesson.next_lesson &&
                read_lesson.id === currentLesson.next_lesson.id) ||
              read_lesson.next_lesson.id === currentLesson.next_lesson.id
          ) && (
            <>
              <Link
                onClick={handleClose}
                to={`/courses/${currentLesson.chapter.course_id}/chapters/${currentLesson.next_lesson.chapter_id}/lessons/${currentLesson.next_lesson.id}`}
              >
                {t("next_lesson")}
              </Link>
              <AiOutlineArrowRight style={{ color: "white" }} />
            </>
          )}
      </div>
    </Row>
  );
};

export default ChapterProgressBar;
