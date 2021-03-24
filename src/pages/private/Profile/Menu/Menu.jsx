import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation} from "react-i18next";
import { fetchToLogout } from "stores/authentication/authMiddleware";
import Avatar from "../components/Avatar";
import ProfileDisplay from "../components/ProfileDisplay";
import { FaChevronRight } from "react-icons/fa";
import "./Menu.scss";

const ProfileMenu = () => {
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
      <div className="card-body text-center">
        <Avatar />
        <ProfileDisplay />
        <NavLink to="/profile/mycourses" activeClassName="is-active" className="user-menu-link">
          <span>{t("profile:menucourses")}</span>
          <span className="user-menu-icon"><FaChevronRight /></span>
        </NavLink>
        <NavLink to="/profile/edit" activeClassName="is-active" className="user-menu-link">
          <span>{t("profile:menuedit")}</span>
          <span className="user-menu-icon"><FaChevronRight /></span>
        </NavLink>
        <NavLink to="/profile/avatar" activeClassName="is-active" className="user-menu-link">
          <span>{t("profile:menuavatar")}</span>
          <span className="user-menu-icon"><FaChevronRight /></span>
        </NavLink>
        <NavLink to="/profile/editregistration" activeClassName="is-active" className="user-menu-link">
          <span>{t("profile:menueditregistration")}</span>
          <span className="user-menu-icon"><FaChevronRight /></span>
        </NavLink>
        <NavLink to="/profile/myinvoices" activeClassName="is-active" className="user-menu-link">
          <span>{t("profile:menuinvoices")}</span>
          <span className="user-menu-icon"><FaChevronRight /></span>
        </NavLink>
        <Link className="user-menu-link" onClick={logout}>
          <span>{t("navigation:linkLogout")}</span>
          <span className="user-menu-icon"><FaChevronRight /></span>
        </Link>
      </div>
    </div>
  );
};
  
export default ProfileMenu;

