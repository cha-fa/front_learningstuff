import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
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
import Footer from "components/layouts/Footer/Footer";
import FlashMessage from "components/layouts/FlashMessage";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import AdminRoute from "components/AdminRoute";
import Admin from "pages/Admin/Admin";
import PageNotFound from "pages/PageNotFound";
import LearningPaths from "pages/public/LearningPaths/LearningPaths";
import Courses from "pages/public/Courses/Courses";
import LearningPathShow from "pages/public/LearningPaths/LearningPathShow";
import ShowCourse from "pages/public/Courses/ShowCourse/ShowCourse";
import Subscription from "pages/private/Subscription/Subscription";
import RecoverPassword from "pages/public/RecoverPassword/RecoverPassword";
import ForgotPassword from "pages/public/ForgotPassword/ForgotPassword";
import AOS from "aos";
import "aos/dist/aos.css";

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
    AOS.init({ once: true, duration: 400 });

    AOS.refresh();
  }, []);

  return (
    <section className="App">
      <Router>
        <Navigation />
        {displayFlash && <FlashMessage />}
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted component={Login} path="/login" exact />
          <PublicRoute
            restricted
            component={RecoverPassword}
            path="/password/edit"
            exact
          />
          <PublicRoute
            restricted
            component={ForgotPassword}
            path="/password"
            exact
          />
          <PublicRoute restricted component={Register} path="/register" exact />
          <PublicRoute component={LearningPaths} path="/learning_paths" exact />
          <PublicRoute
            component={LearningPathShow}
            path="/learning_paths/:pathSlug"
          />
          <PublicRoute component={Courses} path="/courses" exact />
          <PublicRoute component={ShowCourse} path="/courses/:id" exact />
          <PrivateRoute
            component={Profile}
            path="/profile"
            {...(<Redirect to="/profile/mycourses" />)}
          />
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
