import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "hooks/useFetch";
import { useTranslation} from "react-i18next";
import EditProfile from "./components/EditProfile";
import EditAvatar from "./components/EditAvatar";

const Feed  = ( {currentUser} ) => {

  const history = useHistory();
  const {t}=useTranslation();
  const { put, postAvatar } = useFetch();

  const updateProfile = (newDetails) => {
    put("/profile", newDetails);
    history.push("/profile");
  };

  const updateAvatar = (newAvatar) => {
    postAvatar(`/users/${currentUser.id}/avatars`, newAvatar);
    history.push("/profile");
  };
  
  return (
    <div className="Feed">
      <Switch>
        <Route path="/profile/edit">
          <EditProfile onSubmit={updateProfile} />
        </Route>
      </Switch>
    </div>
  );
};
  
export default Feed;