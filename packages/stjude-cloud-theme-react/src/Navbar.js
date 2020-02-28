import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Navbar as BSNavbar, Nav, Dropdown} from 'react-bootstrap';

let Link;
try {
  Link = require('react-router-dom').Link;
} catch (err) {
  Link = 'a';
}

import MegaMenu from './MegaMenu';

const propTypes = {
  children: PropTypes.node,
  portalTitle: PropTypes.string.isRequired,
  portalLink: PropTypes.string.isRequired,
};

function Navbar({children, portalTitle, portalLink}) {
  // Force react-bootstrap to render the dropdown markdown so CSS can animate
  // the slide on toggle. After setting `show`, immediately unset to allow
  // dropdowns to function normally and independently.
  const [show, setShow] = useState(true);
  React.useEffect(() => {
    setShow(null);
  }, []);

  const linkProps = {
    [Link === 'a' ? 'href' : 'to']: portalLink,
    children: portalTitle,
    className: 'portal-title',
  };
  const portalElement = React.createElement(Link, linkProps);

  return (
    <header className="sjc-omnibar">
      <BSNavbar variant="">
        <BSNavbar.Brand href="https://stjude.cloud">
          <span className="logo"></span>
        </BSNavbar.Brand>
        <a className="sjc-title" href="https://stjude.cloud">
          St. Jude Cloud
        </a>
        {portalElement}

        <Nav className="global-icons" as="ul">
          {children}

          <Dropdown className="mega-dropdown" title="St. Jude Cloud Mega Menu">
            <Dropdown.Toggle as={Nav.Link} className="profile-dropdown-toggle">
              <div className="nav-menu-icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="mega-dropdown-menu" show={show}>
              <MegaMenu />
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </BSNavbar>
    </header>
  );
}

Navbar.displayName = 'St. Jude Cloud Navbar';
Navbar.propTypes = propTypes;

export default Navbar;
