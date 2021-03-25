import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Sidebar.scss";
import { Nav, Accordion, Button } from "react-bootstrap";
import { GoTriangleRight } from "react-icons/go";

const Sidebar = () => {
  const { t } = useTranslation("admin");

  return (
    <Nav className="Sidebar flex-column">
      <h2 className="mt-5 ml-2 mb-5">{t("dashboard_admin")}</h2>
      <NavLink to="/admin/approvals">{t("manage_approvals")}</NavLink>
      <NavLink to="/admin/users">{t("manage_users")}</NavLink>
      <NavLink to="/admin/categories">{t("manage_categories")}</NavLink>
      <NavLink to="/admin/learning_paths">{t("manage_learning_paths")}</NavLink>
      <Accordion>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          {t("manage_courses")} <GoTriangleRight />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <>
            <NavLink className="ml-5" to="/admin/courses">
              <small>- {t("all_courses")}</small>
            </NavLink>
            <br />
            <NavLink className="ml-5" to="/admin/import">
              <small>- {t("import_course")}</small>
            </NavLink>
          </>
        </Accordion.Collapse>
      </Accordion>
      
    </Nav>
  );
};

export default Sidebar;
