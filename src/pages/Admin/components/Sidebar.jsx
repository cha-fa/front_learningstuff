import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation("admin");

  return (
    <div className="Sidebar">
      <NavLink className="nav-link" to="/admin/approvals">
        {t("manage_approvals")}
      </NavLink>
      <NavLink className="nav-link" to="/admin/users">
        {t("manage_users")}
      </NavLink>
      <NavLink className="nav-link" to="/admin/learning_paths">
        {t("manage_learning_paths")}
      </NavLink>
    </div>
  );
};

export default Sidebar;
