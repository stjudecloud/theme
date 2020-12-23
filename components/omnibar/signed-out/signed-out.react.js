import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import FeaturedImage from "@stjudecloud/theme/dist/images/featured-study.jpg";
import GenomicsPlatformIcon from "@stjudecloud/theme/dist/images/icon-genomics-platform.png";
import PeCanIcon from "@stjudecloud/theme/dist/images/icon-pecan.png";
import VizCommIcon from "@stjudecloud/theme/dist/images/icon-viz.png";

function MegaMenu() {
  return (
    <Container className="mega-menu-container">
      <Row>
        <Col md={{ span: 3, order: 2 }} className="mega-dropdown-col">
          <div className="mega-menu-title">Research Domains</div>
          <ul className="list-unstyled">
            <li>
              <a href="https://stjude.cloud/research-domains/pediatric-cancer">
                Pediatric Cancer
              </a>
            </li>
            <li>
              <a href="https://stjude.cloud/research-domains/cancer-survivorship">
                Cancer Survivorship
              </a>
            </li>
            <li>
              <a href="https://stjude.cloud/research-domains/non-cancerous-diseases">
                Non-cancerous Diseases
              </a>
            </li>
          </ul>
        </Col>
        <Col md={{ span: 3, order: 3 }} className="mega-dropdown-col">
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
                  <div className="genomics-platform-subtext">
                    Data &amp; Tools
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a href="https://pecan.stjude.cloud/" className="app-title">
                <img
                  className="app-title__icon"
                  src={PeCanIcon}
                  alt="PeCan Icon"
                />
                <span>PeCan</span>
              </a>
            </li>
            <li>
              <a href="https://viz.stjude.cloud" className="app-title">
                <img
                  className="app-title__icon"
                  src={VizCommIcon}
                  alt="Visualization Community Icon"
                />
                <span>Visualization Community</span>
              </a>
            </li>
            <li>
              <a href="https://stjude.cloud/apps" className="text-primary">
                View All Apps
              </a>
            </li>
          </ul>
        </Col>
        <Col md={{ span: 3, order: 1 }} className="mega-dropdown-col d-flex">
          <div className="featured-study">
            <a href="https://stjude.cloud/studies/clinical-genomics">
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
                  <a href="https://stjude.cloud/studies/clinical-genomics">
                    Real-time Clinical Genomics
                  </a>
                </li>
                <li>
                  <a
                    href="https://stjude.cloud/studies"
                    className="text-primary"
                  >
                    View All Studies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={{ span: 3, order: 4 }} className="mega-dropdown-col">
          <div className="mega-menu-title">Support</div>
          <ul className="list-unstyled">
            <li>
              <a
                href="https://www.stjude.cloud/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help Guides
              </a>
            </li>
            <li>
              <a
                href="https://www.stjude.cloud/docs/faq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="https://stjude.cloud/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

MegaMenu.displayName = "St. Jude Cloud Navbar MegaMenu";

export default MegaMenu;
