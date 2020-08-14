import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ErrorComponent = ({ variant }) => (
  <div className="not-found">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {variant === 'internalServerError' && (
            <>
              <h2>500</h2>
              <h4>Something went wrong. You could try refreshing the page or looking elsewhere.</h4>
            </>
          )}
          {variant === 'notFound' && (
            <>
              <h2>404</h2>
              <h4>The page you are looking for is not here.</h4>
            </>
          )}
          <Button variant="primary" href="/">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export const defaultProps = {
  variant: 'internalServerError',
};

export const propTypes = {
  variant: PropTypes.oneOf(['notFound', 'internalServerError']).isRequired,
};

ErrorComponent.defaultProps = defaultProps;
ErrorComponent.propTypes = propTypes;

export default ErrorComponent;
