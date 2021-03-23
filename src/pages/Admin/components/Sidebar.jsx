import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Sidebar.scss";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  const { t } = useTranslation("admin");

  return (
    <Nav className="Sidebar flex-column">
      <h2 className="mt-5 ml-2 mb-5">{t("dashboard_admin")}</h2>
      <NavLink to="/admin/approvals">{t("manage_approvals")}</NavLink>
      <NavLink to="/admin/users">{t("manage_users")}</NavLink>
      <NavLink to="/admin/categories">{t("manage_categories")}</NavLink>
      <NavLink to="/admin/learning_paths">{t("manage_learning_paths")}</NavLink>
    </Nav>
  );
};

export default Sidebar;
