import React from "react";
import PropTypes from "prop-types";
import { Button, Image } from "react-bootstrap";

import NotFoundImage from "~@stjudecloud/theme/dist/images/404.png";

function ErrorComponent({ variant }) {
  return (
    <div className="d-flex">
      <div className="sjc-error">
        {variant === "notFound" && (
          <Image className="error-image" src={NotFoundImage} />
        )}

        <div className="error-list-container">
          <h2 className="error-header">
            {(variant === "notFound" && "Page Not Found") ||
              "Internal Server Error"}
          </h2>
          <p className="error-subheader">
            {variant === "internalServerError" && (
              <>
                Something went wrong! You could try refreshing the page or
                looking elsewhere.
                <br />
                <br />
              </>
            )}
            Here are some helpful links instead.
          </p>
          <div className="error-links-list">
            <a href="https://www.stjude.cloud/">St. Jude Cloud Home</a>
            <br />
            <a href="https://stjude.cloud/docs/">Documentation</a>
            <br />
            <a
              href="https://stjude.cloud/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>

        <Button variant="primary" className="w-100 mt-3" href="/">
          Take me to the homepage
        </Button>
      </div>
    </div>
  );
}

export const defaultProps = {
  variant: "internalServerError"
};

export const propTypes = {
  variant: PropTypes.oneOf(["notFound", "internalServerError"]).isRequired
};

ErrorComponent.defaultProps = defaultProps;
ErrorComponent.propTypes = propTypes;

export default ErrorComponent;
