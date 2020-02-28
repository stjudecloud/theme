import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Navbar as BSNavbar, Nav, Container, Row, Col, Dropdown} from 'react-bootstrap';

let Link;
try {
  Link = require('react-router-dom').Link;
} catch (err) {
  Link = 'a';
}

import FeaturedImage from '@stjudecloud/theme/dist/images/featured-study.jpg';
import GenomicsPlatformIcon from '@stjudecloud/theme/dist/images/icon-genomics-platform.png';
import PeCanIcon from '@stjudecloud/theme/dist/images/icon-pecan.png';
import VizCommIcon from '@stjudecloud/theme/dist/images/icon-viz.png';


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

  const props = {
    [Link === 'a' ? 'href' : 'to']: portalLink,
    children: portalTitle,
    className: 'portal-title',
  };
  const portalElement = React.createElement(Link, props);

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
              <Container className="mega-menu-container">
                <Row>
                  <Col md={{span: 3, order: 2}} className="mega-dropdown-col">
                    <div className="mega-menu-title">Research Domains</div>
                    <ul className="list-unstyled">
                      <li>
                        <a href="https://stjude.cloud/pediatric-cancer.html">Pediatric Cancer</a>
                      </li>
                      <li>
                        <a href="https://stjude.cloud/cancer-survivorship.html">
                          Cancer Survivorship
                        </a>
                      </li>
                      <li>
                        <a href="https://stjude.cloud/noncancerous-diseases.html">
                          Non-cancerous Diseases
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={{span: 3, order: 3}} className="mega-dropdown-col">
                    <div className="mega-menu-title">Apps</div>
                    <ul className="list-unstyled">
                      <li>
                        <a href="https://platform.stjude.cloud" className="app-title">
                          <img
                            className="app-title__icon"
                            src={GenomicsPlatformIcon}
                            alt="Genomics Platform Icon"
                          />
                          <span>
                            Genomics Platform
                            <div className="genomics-platform-subtext">Data &amp; Tools</div>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://pecan.stjude.cloud/" className="app-title">
                          <img className="app-title__icon" src={PeCanIcon} alt="PeCan Icon" />
                          <span>PeCan</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://viz.stjude.cloud" className="app-title">
                          <img
                            className="app-title__icon"
                            src={VizCommIcon}
                            alt="Vizualization Community Icon"
                          />
                          <span>Visualization Community</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://stjude.cloud/apps.html" className="text-primary">
                          View All Apps
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={{span: 3, order: 1}} className="mega-dropdown-col d-flex">
                    <div className="featured-study">
                      <a href="https://stjude.cloud/studies/clinical-genomics.html">
                        <img
                          className="featured-study__image"
                          src={FeaturedImage}
                          alt="Featured Study Image"
                        />
                      </a>
                      <div>
                        <div className="featured-study__title">Featured Study</div>
                        <ul className="list-unstyled">
                          <li>
                            <a href="https://stjude.cloud/studies/clinical-genomics.html">
                              Real-time Clinical Genomics
                            </a>
                          </li>
                          <li>
                            <a href="https://stjude.cloud/studies.html" className="text-primary">
                              View All Studies
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col md={{span: 3, order: 4}} className="mega-dropdown-col">
                    <div className="mega-menu-title">Support</div>
                    <ul className="list-unstyled">
                      <li>
                        <a href="https://www.stjude.cloud/docs/" target="_blank" rel="noopener">
                          Help Guides
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.stjude.cloud/docs/faq/"
                          target="_blank"
                          rel="noopener"
                        >
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://hospital.stjude.org/apps/forms/fb/st-jude-cloud-contact/"
                          target="_blank"
                          rel="noopener"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
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
