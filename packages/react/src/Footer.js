import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube
);

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col
            xs={{ span: 6, offset: 3 }}
            md={{ span: 4, offset: 4 }}
            lg={{ span: 3, offset: 5 }}
            xl={{ offset: 0 }}
            className="logo-container"
          >
            <Navbar.Brand href="https://stjude.cloud">
              <span className="logo"></span>
            </Navbar.Brand>
            <a className="sjc-title" href="https://stjude.cloud">
              St. Jude Cloud
            </a>
          </Col>
          <Col
            xs={{ span: 6 }}
            md={{ span: 3, offset: 2 }}
            xl={{ offset: 0 }}
            className="footer-about"
          >
            <h6>About</h6>
            <ul>
              <li>
                <a href="https://stjude.cloud" title="St. Jude Cloud Home">
                  Home
                </a>
              </li>
              <li>
                <a href="https://talent.stjude.org/data-sciences/jobs" title="Careers">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://stjude.cloud/privacy-policy"
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://stjude.cloud/terms-of-use"
                  title="Terms of Use"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </Col>
          <Col
            xs={{ span: 6 }}
            md={{ span: 3, offset: 2 }}
            xl={{ offset: 0 }}
            className="footer-apps"
          >
            <h6>Apps</h6>
            <ul>
              <li>
                <a
                  href="https://platform.stjude.cloud"
                  title="Genomics Platform"
                >
                  Genomics Platform
                </a>
              </li>
              <li>
                <a
                  href="https://models.stjude.cloud"
                  title="Model Systems"
                >
                    Model Systems
                </a>
              </li>
              <li>
                <a
                  href="https://pecan.stjude.cloud"
                  title="Pediatric Cancer Portal (PeCan)"
                >
                  Pediatric Cancer Portal (PeCan)
                </a>
              </li>
              <li>
                <a
                  href="https://viz.stjude.cloud"
                  title="Visualization Community"
                >
                  Visualization Community
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container fluid className="sub-footer">
        <Container>
          <Row>
            <Col lg={12} xl={6} className="order-last">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.stjude.org/legal/u-s-privacy-policy-statement.html"
                    title="U.S. Privacy Policy Statement"
                  >
                    Privacy
                  </a>{" "}
                  <span>&#8226;</span>
                </li>{" "}
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.stjude.org/legal.html"
                    title="Disclaimer / Registrations / Copyright Statement"
                  >
                    Disclaimer / Registrations / Copyright
                  </a>{" "}
                  <span>&#8226;</span>
                </li>{" "}
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.stjude.org/legal/linking-policy.html"
                    title="Linking Policy"
                  >
                    Linking
                  </a>{" "}
                  <span>&#8226;</span>
                </li>{" "}
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.stjude.org/legal/notice-of-privacy-practices.html"
                    title="Notice of Privacy Practices (HIPAA)"
                  >
                    Privacy (HIPAA)
                  </a>{" "}
                  <span>&#8226;</span>
                </li>{" "}
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.stjude.org/legal/notice-of-non-discrimination.html"
                    title="Notice of Non-Discrimination"
                  >
                    Non-Discrimination
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              xs={{ span: 8, offset: 2 }}
              md={{ span: 12, offset: 0 }}
              xl={6}
            >
              <p>
                &copy; Copyright {new Date().getFullYear()} St. Jude Children's Research Hospital, a
                not-for-profit, section 501(c)(3).
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;
