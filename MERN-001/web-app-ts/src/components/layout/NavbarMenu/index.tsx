import Logo from "assets/logo.svg";
import IconLogout from "assets/logout.svg";
import { useCheckAuth, useLogout } from "features";
import { FC } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

type PropTypes = {};

export const NavbarMenu: FC<PropTypes> = (props: PropTypes) => {
  const { authInfo } = useCheckAuth();
  const onLogout = useLogout();

  return (
    <Navbar
      expand="lg"
      bg="info"
      variant="dark"
      className="shadow"
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
      fixed="top"
    >
      <Navbar.Brand className="font-weight-bolder text-white">
        <img
          src={Logo}
          alt="learnItLogo"
          width="32"
          height="32"
          className="mr-2"
        />
        LearnIt
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{ justifyContent: "space-between" }}
      >
        <Nav className="mr-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/dashboard"
            as={Link}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>

        <Nav style={{ alignItems: "center" }}>
          <Nav.Link className="font-weight-bolder text-white" disabled>
            Welcome {authInfo?.user}
          </Nav.Link>
          <Button
            variant="secondary"
            className="font-weight-bolder text-white"
            onClick={onLogout}
          >
            <img
              src={IconLogout}
              alt="logoutIcon"
              width="32"
              height="32"
              className="mr-2"
            />
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
