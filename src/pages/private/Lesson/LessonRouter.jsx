import PrivateRoute from "components/PrivateRoute";
import React from "react";
import LessonContent from "./LessonContent/LessonContent";
import LessonForum from "./LessonForum/LessonForum";
import { Switch } from "react-router-dom";

const LessonRouter = ({ currentUser, data, ids }) => {
  return (
    <>
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
          <LessonForum ids={ids} />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default LessonRouter;
