import { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "stores/authentication/authMiddleware";
import * as authActions from "stores/authentication/authActions";
import "./i18n";
import Cookies from "js-cookie";
import Home from "pages/public/Home/Home";
import Login from "pages/public/Login/Login";
import Register from "pages/public/Register/Register";
import Profile from "pages/private/Profile/Profile";
import Lesson from "pages/private/Lesson/Lesson";
import Navigation from "components/layouts/Navigation/Navigation";
import Footer from "components/layouts/Footer";
import FlashMessage from "components/layouts/FlashMessage";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import AdminRoute from "components/AdminRoute";
import Admin from "pages/Admin/Admin";
import PageNotFound from "components/PageNotFound";
import LearningPaths from "pages/public/LearningPaths/LearningPaths";
import Courses from "pages/public/Courses/Courses";
import ShowLearningPath from "pages/public/LearningPaths/ShowLearningPath/ShowLearningPath";
import ShowCourse from "pages/public/Courses/ShowCourse/ShowCourse";
import Subscription from "pages/private/Subscription/Subscription";

const App = () => {
  const displayFlash = useSelector((state) => state.flash.display);
  const dispatch = useDispatch();

  const autoLogin = async () => {
    const token = Cookies.get("token");
    if (!token) {
      dispatch(authActions.loginFail());
      return;
    }
    dispatch(fetchCurrentUser(token));
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <section className="App">
      <Router>
        <Navigation />
        {displayFlash && <FlashMessage />}
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted component={Login} path="/login" exact />
          <PublicRoute restricted component={Register} path="/register" exact />
          <PublicRoute component={LearningPaths} path="/learning_paths" exact />
          <PublicRoute
            component={ShowLearningPath}
            path="/learning_paths/:id"
            exact
          />
          <PublicRoute component={Courses} path="/courses" exact />
          <PublicRoute component={ShowCourse} path="/courses/:id" exact />
          <PrivateRoute component={Profile} path="/profile" exact />
          <PrivateRoute component={Subscription} path="/subscription" exact />
          <AdminRoute component={Admin} path="/admin" />
          <PrivateRoute
            component={Lesson}
            path="/courses/:courseId/chapters/:chapterId/lessons/:lessonId"
          />
          <PublicRoute restricted={false} component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </section>
  );
};

export default App;
