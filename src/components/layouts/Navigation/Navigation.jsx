import { useEffect } from "react";

import { Link, useHistory, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchToLogout } from "stores/authentication/authMiddleware";
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import "./Navigation.scss";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { AiOutlineShoppingCart, AiFillBell } from "react-icons/ai";
import noavatar from "assets/noavatar.jpg";
import { useTranslation } from "react-i18next";
import useFetch from "hooks/useFetch";

const Navigation = () => {
  const token = useSelector((state) => state.auth.token);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { data, error, get } = useFetch();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(fetchToLogout(token));
    history.push("/");
  };

  useEffect(() => {
    get("/learning_paths?single=false");
  }, []);

  return (
    <Navbar className="Navigation" expand="lg">
      <Navbar.Brand>
        <Link className="Navigation__logo" to="/">
          {t("navigation:navBrand")}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav inline className="ml-auto">
          <Nav.Link>
            <NavLink className="nav-link" to="/">
              {t("navigation:linkHome")}
            </NavLink>
          </Nav.Link>

          <NavDropdown
            title={t("navigation:linkLearningPath")}
            id="path-nav-dropdown"
            className="nav-link"
          >
            {data &&
              data.map((path) => (
                <Link
                  key={path.id}
                  className="nav-link "
                  to={`/learning_paths/${path.slug}`}
                >
                  {path.title}
                </Link>
              ))}
            <NavDropdown.Divider />
            <Link className="nav-link " to="/learning_paths">
              {t("navigation:linkAllLearningPath")}
            </Link>
          </NavDropdown>

          <Nav.Link>
            <NavLink className="nav-link" to="/courses">
              {t("navigation:linkCourse")}
            </NavLink>
          </Nav.Link>

          {/* <Nav.Link>
            <NavLink className="nav-link" to="/subscription">
              <AiOutlineShoppingCart size={35} style={{ color: "orange" }} />
            </NavLink>
          </Nav.Link> */}

          {/* {currentUser && (
            <Nav.Link>
              <Link className="nav-link" to="/">
                <AiFillBell size={35} style={{ color: "orange" }} />
              </Link>
            </Nav.Link>
          )} */}

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
              <NavDropdown
                title={
                  <div>
                    {(currentUser.avatar && (
                      <Image
                        src={currentUser.avatar}
                        alt="Real avatar."
                        className="user-avatar-navbar"
                        roundedCircle
                      />
                    )) || (
                      <Image
                        src={noavatar}
                        alt="Unknown avatar in case the user hasn't upload his/her."
                        className="user-avatar-navbar"
                        roundedCircle
                      />
                    )}
                  </div>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="dropdown-item" to="profile/mycourses">
                    {t("navigation:my_courses")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="dropdown-item" to="/">
                    {t("navigation:linkOrders")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="dropdown-item" to="/profile/edit">
                    {t("navigation:my_profile")}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item">
                  <Link className="dropdown-item" onClick={logout} to="/">
                    {t("navigation:linkLogout")}
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="ml-0 pl-0">
                <Link className="nav-link ml-0 pl-0" to="/profile">
                  {currentUser.first_name} {currentUser.last_name}
                </Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
