import React from "react";
import PrivateRoute from "components/PrivateRoute";
import { Switch, useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import LessonContent from "./LessonContent/LessonContent";
import LessonForum from "./LessonForum/LessonForum";
import { useTranslation } from "react-i18next";

const Lesson = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { lessonId } = useParams();
  const { t } = useTranslation(["translation", "lesson"]);

  return (
    <div className="Lesson">
      <Col md={6}>
        <NavLink className="nav-link" to={`/lessons/${lessonId}/content`}>
          {t("lesson:content")}
        </NavLink>
        <NavLink className="nav-link" to={`/lessons/${lessonId}/forum`}>
          {t("lesson:forum")}
        </NavLink>

        <Switch>
          <PrivateRoute
            currentUser={currentUser}
            component={LessonContent}
            path="/lessons/:lessonId/content"
          />
          <PrivateRoute
            currentUser={currentUser}
            component={LessonForum}
            path="/lessons/:lessonId/forum"
          />
        </Switch>
      </Col>
    </div>
  );
};

export default Lesson;
