import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUser } from "stores/authentication/authMiddleware";
import "./i18n";
import Cookies from "js-cookie";
import Home from "pages/public/Home";
import Login from "pages/public/Login/Login";
import Register from "pages/public/Register/Register";
import Profile from "pages/private/Profile";
import Navigation from "components/layout/Navigation/Navigation";
import Footer from "components/layout/Footer";
import FlashMessage from "components/layout/FlashMessage";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import AdminRoute from "components/AdminRoute";
import Admin from "pages/Admin/Admin";
import Lesson from "pages/private/Lesson/Lesson";
import PageNotFound from "components/PageNotFound";

const App = () => {
  const [loadReady, setLoadReady] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const displayFlash = useSelector((state) => state.flash.display);
  const dispatch = useDispatch();

  const autoLogin = async () => {
    const token = Cookies.get("token");
    if (!currentUser && token) {
      dispatch(fetchCurrentUser(token));
    }
    setLoadReady(true);
  };

  useEffect(() => {
    autoLogin();
  }, [currentUser]);

  return (
    <section className="App">
      <Router>
        <Navigation />
        {displayFlash && <FlashMessage />}
        {loadReady && (
          <Switch>
            <PublicRoute
              restricted={false}
              currentUser={currentUser}
              component={Home}
              path="/"
              exact
            />
            <PublicRoute
              restricted
              currentUser={currentUser}
              component={Login}
              path="/login"
              exact
            />
            <PublicRoute
              restricted
              currentUser={currentUser}
              component={Register}
              path="/register"
              exact
            />
            <PrivateRoute
              currentUser={currentUser}
              component={Profile}
              path="/profile"
              exact
            />
            <AdminRoute
              currentUser={currentUser}
              component={Admin}
              path="/admin"
            />
            <PrivateRoute
              currentUser={currentUser}
              component={Lesson}
              path="/courses/:courseId/chapters/:chapterId/lessons/:lessonId"
            />
            <PublicRoute restricted={false} component={PageNotFound} />
          </Switch>
        )}
        <Footer />
      </Router>
    </section>
  );
};

export default App;
