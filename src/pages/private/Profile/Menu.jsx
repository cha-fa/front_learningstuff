import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation} from "react-i18next";
import { fetchToLogout } from "stores/authentication/authMiddleware";
import ProfileDisplay from "pages/private/Profile/components/ProfileDisplay";
import Avatar from "pages/private/Profile/components/Avatar";

const ProfileMenu = ( {profile} ) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const history = useHistory();
  const {t}=useTranslation();

  const logout = () => {
    dispatch(fetchToLogout(token));
    history.push("/");
  };
  
  return (
    <div className="ProfileMenu card border-light p-2">
      <div className="card-body p-2">
        <Avatar profile={profile} />
        <ProfileDisplay profile={profile} />
        <Link className="nav-link" to="/profile/edit">My Profile</Link>
        <Link className="nav-link" to="/profile/invoices">My Invoices</Link>
        <Link className="nav-link" to="/profile/courses">My Courses</Link>
        <button onClick={logout}>{t("navigation:linkLogout")}</button>
      </div>
    </div>
  );
};
  
export default ProfileMenu;

