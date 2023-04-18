import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Navbar as BSNavbar,
  Nav,
  Dropdown,
  Button,
  Container,
} from "react-bootstrap";

let Link = "a";
try {
  Link = require("react-router-dom").Link;
} catch (err) {
  Link = "a";
}

import MegaMenu from "./MegaMenu";

const propTypes = {
  children: PropTypes.node,
  portalConfig: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  loginConfig: PropTypes.shape({
    show: PropTypes.bool,
    loginLink: PropTypes.string.isRequired,
    loginButtonMessage: PropTypes.string,
  }),
  userDropdownConfig: PropTypes.shape({
    show: PropTypes.bool,
    logoutLink: PropTypes.string,
    additionalItems: PropTypes.node,
  }),
};

function Navbar({ children, portalConfig, loginConfig, userDropdownConfig }) {
  // Force react-bootstrap to render the dropdown markdown so CSS can animate
  // the slide on toggle. After setting `show`, immediately unset to allow
  // dropdowns to function normally and independently.
  const [show, setShow] = useState(true);
  React.useEffect(() => {
    setShow(null);
  }, []);

  const linkProps = {
    [Link === "a" ? "href" : "to"]: portalConfig.link,
    children: portalConfig.title,
    className: "portal-title",
  };
  const portalElement = React.createElement(Link, linkProps);

  let loginButton;
  if (loginConfig && loginConfig.show) {
    const loginButtonProps = {
      [Link === "a" ? "href" : "to"]: loginConfig.loginLink,
    };
    loginButton = (
      <div className="d-flex align-items-center">
        <Button
          as={Link}
          variant="outline-light"
          className="login-btn align-items-center"
          {...loginButtonProps}
        >
          {loginConfig.loginButtonMessage || "Sign in"}
        </Button>
      </div>
    );
  }

  let userDropdown;
  if (userDropdownConfig && userDropdownConfig.show) {
    userDropdown = (
      <Dropdown className="user-dropdown" title="User Info" align="end">
        <Dropdown.Toggle as={Nav.Link} className="profile-dropdown-toggle">
          <span className="user-icon" alt="Account Information"></span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="profile-dropdown-menu" show={show}>
          <ul className="list-unstyled">
            {userDropdownConfig.additionalItems}
            {userDropdownConfig.logoutLink && (
              <li>
                <Dropdown.Item as={Link} to={userDropdownConfig.logoutLink}>
                  {userDropdownConfig.logoutMessage || "Sign out"}
                </Dropdown.Item>
              </li>
            )}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <header className="sjc-omnibar">
      <BSNavbar variant="">
        <Container fluid>
          <BSNavbar.Brand
            href="https://stjude.cloud"
            title="St. Jude Cloud"
            alt="St. Jude Cloud"
          >
            <span className="logo"></span>
          </BSNavbar.Brand>
          <a
            className="sjc-title"
            href="https://stjude.cloud"
            title="St. Jude Cloud"
          >
            St. Jude Cloud
          </a>
          {portalElement}
          <Nav className="global-icons" as="ul">
            {children}
            {loginButton}
            {userDropdown}

            <Dropdown
              className="mega-dropdown"
              title="St. Jude Cloud Mega Menu"
            >
              <Dropdown.Toggle
                as={Nav.Link}
                className="profile-dropdown-toggle"
              >
                <span className="nav-menu-icon" alt="Menu"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="mega-dropdown-menu" show={show}>
                <MegaMenu />
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </BSNavbar>
    </header>
  );
}

Navbar.displayName = "St. Jude Cloud Navbar";
Navbar.propTypes = propTypes;

export default Navbar;
