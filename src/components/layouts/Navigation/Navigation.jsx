import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchToLogout } from "stores/authentication/authMiddleware";
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import "./Navigation.scss";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { AiOutlineShoppingCart, AiFillBell } from "react-icons/ai";
import noavatar from "assets/noavatar.jpg";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const token = useSelector((state) => state.auth.token);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(fetchToLogout(token));
    history.push("/");
  };
  return (
    <Navbar expand="lg">
      <Navbar.Brand>{t("navigation:navBrand")}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav inline className="ml-auto">
          <Nav.Link>
            <Link className="nav-link" to="/">
              {t("navigation:linkHome")}
            </Link>
          </Nav.Link>
          <NavDropdown title="Learn" className="m-2">
            <NavDropdown.Item>
              <Link className="nav-link " to="/learning_paths">{t("navigation:linkLearningPath")}</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link className="nav-link" to="/courses">{t("navigation:linkCourse")}</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <Link className="nav-link" to="/">
              {t("navigation:linkAbout")}
            </Link>
          </Nav.Link>
          <Nav.Link> 
            <Link className="nav-link" to="/subscription">
                <AiOutlineShoppingCart 
                  size={25}
                  style={{ color: "orange" }}
                />
            </Link>
          </Nav.Link>

          {currentUser && (
            <Nav.Link>
              <Link className="nav-link" to="/">
                <AiFillBell size={25} style={{ color: "orange" }} />
              </Link>
            </Nav.Link>
          )}

          {!currentUser && (
            <>
              <Link className="m-2" to="/login">
                <ButtonPrimary
                  type="button"
                  sizeClass="medium"
                  label={t("navigation:linkLogin")}
                />
              </Link>
            </>
          )}
          {currentUser && currentUser.role === "admin" && (
            <>
              <Nav.Link>
                <Link className="nav-link" to="/admin">
                  {t("navigation:linkAdmin")}
                </Link>
              </Nav.Link>
            </>
          )}
          {currentUser && (
            <>

              <NavDropdown className="mr-5" title={
                <div>
                  <img className="user-profil" src={noavatar}>
                  </img>
                </div>
              } id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  {t("navigation:linkCourse")}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {t("navigation:linkOrders")}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {t("navigation:linkSettings")}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>
                  {t("navigation:linkLogout")}
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
