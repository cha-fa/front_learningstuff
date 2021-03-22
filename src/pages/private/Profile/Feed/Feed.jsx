import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import  { useHistory } from "react-router-dom";
import useFetch from "hooks/useFetch";
import MyCourses from "../components/MyCourses";
import EditProfile from "../components/EditProfile";
import EditAvatar from "../components/EditAvatar";
import EditRegistration from "../components/EditRegistration";
import MyInvoices from "../components/MyInvoices";

const Feed  = ( {reload, reloadAvatar} ) => {

  const currentUser = useSelector((state) => state.auth.currentUser);
  const { put, postAvatar } = useFetch();
  const history = useHistory();

  const updateProfile = (newDetails) => {
    put("/profile", newDetails);
    reload(true);
    history.push("/profile/mycourses");
  };

  const updateAvatar = (newAvatar) => {
    postAvatar(`/users/${currentUser.id}/avatars`, newAvatar);
    reloadAvatar(true);
    history.push("/profile/mycourses");
  };

  const updateRegistration = (newCredentials) => {
    console.log("TODO --> Modifier Devise Registration", newCredentials);
  };
  
  return (
    <div className="Feed card border-light p-2">
      <div className="card-body p-2">
        <Switch>
          <Route path="/profile/mycourses">
            <MyCourses />
          </Route>
          <Route path="/profile/edit">
            <EditProfile onSubmit={updateProfile} />
          </Route>
          <Route path="/profile/avatar">
            <EditAvatar onSubmit={updateAvatar} />
          </Route>
          <Route path="/profile/editregistration">
            <EditRegistration onSubmit={updateRegistration} />
          </Route>
          <Route path="/profile/myinvoices">
            <MyInvoices />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
  
export default Feed;