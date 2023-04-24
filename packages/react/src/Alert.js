import React from "react";
import { Row, Col, Toast } from "react-bootstrap";
import ToastContainer from 'react-bootstrap/ToastContainer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faCircleCheck,
  faExclamationCircle,
  faExclamationTriangle,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCircleCheck,
  faExclamationCircle,
  faExclamationTriangle,
  faXmark
);

function Alert({ message, onclick }) {
  // control the visibility of the alert
  const [show, setShow] = React.useState(true);

  let variantClass;
  switch (message.type) {
    case "success":
      variantClass = "alert-success";
      break;
    case "warning":
      variantClass = "alert-warning";
      break;
    case "error":
      variantClass = "alert-danger";
      break;
    case "info":
      variantClass = "alert-info";
      break;
    default:
      variantClass = "slert-info";
  }

  return (
    <ToastContainer position="bottom-center">
      <Toast className={variantClass} autohide>
        <Toast.Body>
          <Row>
            <Col>
              <FontAwesomeIcon icon={["fa", "circle-check"]} />
            </Col>
            <Col>
              { message.body }
            </Col>
            <Col>
              <FontAwesomeIcon icon={["fa", "xmark"]} />                
            </Col>
          </Row>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

Alert.displayName = "St.Jude Cloud Alert";
Alert.propTypes = {
  msg: {
    type: PropTypes.oneOf(["success", "warning", "error", "info"]),
    title: PropTypes.string,
    body: PropTypes.string
  },
  onclick: PropTypes.func
}

export default Alert;