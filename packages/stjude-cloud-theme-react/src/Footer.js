import React from 'react';
import {Nav, Container} from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <p className="copyright">
          © Copyright 2019. St. Jude Children's Research Hospital, a not-for-profit, section 501(c)(3).{" "}

          <a href="https://www.stjude.org" target="_blank" rel="noopener noreferrer">
            www.stjude.org
          </a>{' '}
          |{' '}
          <a href="https://stjude.cloud/contact" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>{' '}
          | <a href="https://stjude.cloud/privacy-policy">Privacy Policy</a> |{' '}
          <a href="https://stjude.cloud/terms-of-use">Terms and Conditions</a>
        </p>

        <Nav as="ul" className="justify-content-center">
          <Nav.Item as="li">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.stjude.org/legal/u-s-privacy-policy-statement.html"
              title="U.S. Privacy Policy Statement"
            >
              U.S. Privacy Policy Statement
            </a>
          </Nav.Item>

          <Nav.Item as="li">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.stjude.org/legal.html"
              title="Disclaimer / Registrations / Copyright Statement"
            >
              Disclaimer / Registrations / Copyright Statement
            </a>
          </Nav.Item>

          <Nav.Item as="li">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.stjude.org/legal/linking-policy.html"
              title="Linking Policy"
            >
              Linking Policy
            </a>
          </Nav.Item>

          <Nav.Item as="li">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.stjude.org/legal/notice-of-privacy-practices.html"
              title="Notice of Privacy Practices (HIPAA)"
            >
              Notice of Privacy Practices (HIPAA)
            </a>
          </Nav.Item>

          <Nav.Item as="li">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.stjude.org/legal/notice-of-non-discrimination.html"
              title="Notice of Non-Discrimination"
            >
              Notice of Non-Discrimination
            </a>
          </Nav.Item>
        </Nav>

        <ul className="social-media">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/stjuderesearch"
              title="St. Jude Children's Research Hospital Facebook"
            >
              <span className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/StJudeResearch"
              title="St. Jude Children's Research Hospital Twitter"
            >
              <span className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/stjuderesearch/"
              title="St. Jude Children's Research Hospital Instagram"
            >
              <span className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/st-jude-childrens-research-hospital/"
              title="St. Jude Children's Research Hospital LinkedIn"
            >
              <span className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/user/MyStJude"
              title="St. Jude Children's Research Hospital YouTube"
            >
              <span className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer;
