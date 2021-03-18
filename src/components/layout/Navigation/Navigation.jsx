import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchToLogout } from "stores/authentication/authMiddleware";
import { Navbar, NavDropdown, Nav, Image} from "react-bootstrap";
import "./Navigation.scss";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import { AiOutlineShoppingCart, AiFillBell } from "react-icons/ai";
import hello from "assets/macron.jpeg";

const Navigation = () => {
  const token = useSelector((state) => state.auth.token);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(fetchToLogout(token));
    history.push("/");
  };
  return (
    <Navbar expand='lg'>
      <Navbar.Brand>
        LearningStuff
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav inline className="ml-auto">
          <Nav.Link>
            <Link className="nav-link" to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">Courses</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">Blog</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">About Us</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">Contact Us</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">Learning Path</Link>
          </Nav.Link>
          <Nav.Link> 
            <Link className="nav-link" to="/">
                <AiOutlineShoppingCart 
                  size={25}
                  style={{ color: "orange" }}
                />
            </Link>
          </Nav.Link>

          {currentUser && (
           <Nav.Link> 
             <Link className="nav-link" to="/"> 
              <AiFillBell 
                size={25}
                style={{ color: "orange" }}
              />
             </Link>
            </Nav.Link>
          )}
          
          {!currentUser && (
            <>
             
              <Link className="m-2" to="/">
                <ButtonPrimary  sizeClass="medium" label="Be a contributor"/>
              </Link> 


          
              <Link className="m-2" to="/login">
                <ButtonPrimary type="button"sizeClass="medium" label="Login"/>
              </Link>

             
            </>
          )}
          {currentUser && (
            <>
        
              <Link to="/profil">
                <Image className="user-profil"  src={hello} roundedCircle/>
              </Link>
       
            <NavDropdown title="Menu" id="collasible-nav-dropdown"> 
                <NavDropdown.Item>Courses</NavDropdown.Item>
                <NavDropdown.Item>Orders</NavDropdown.Item>
                <NavDropdown.Item>Settings</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
            </NavDropdown>

          
                <Link className="m-2" to="/"> 
                <ButtonPrimary sizeClass="medium" label="Be a contributor"/>
                </Link>
            </>
          )}
          </Nav>
       </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
