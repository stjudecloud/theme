import React, { useState } from "react";
import { Col, Toast } from "react-bootstrap";
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
  const [showAlert, setShowAlert] = useState(true);

  const dismissAlert = () => setShowAlert(!showAlert);

  let variantClass;
  let icon;
  switch (message.type) {
    case "success":
      variantClass = "alert-success";
      icon = (
        <FontAwesomeIcon icon={["fa", "circle-check"]} className="icon-success"/>
      )
      break;
    case "warning":
      variantClass = "alert-warning";
      icon = (
        <FontAwesomeIcon icon={["fa", "exclamation-circle"]} className="icon-warning"/>
      )
      break;
    case "error":
      variantClass = "alert-error";
      icon = (
        <FontAwesomeIcon icon={["fa", "exclamation-triangle"]} className="icon-error"/>
      )
      break;
    default:
      variantClass = "alert-info";
      icon = (
        <FontAwesomeIcon icon={["fa", "exclamation-circle"]} className="icon-info"/>
      )
  }

  return (
    <ToastContainer position="bottom-center">
      <Toast onClose={() => setShowAlert(true)} className={`alert ${variantClass}`} show={showAlert} delay={3000} autohide>
        <Toast.Body>
          <div className="row d-flex flex-nowrap">
            <Col className="col text-center d-flex align-items-center justify-content-center gx-4">
              { icon }
            </Col>
            <Col className="col text-center d-flex align-items-center justify-content-center text-nowrap gx-3 fw-bold">
              { `${message.title.trim()}:` }
            </Col>
            <Col className="col text-center d-flex align-items-center justify-content-center text-nowrap fw-light" style={{marginRight: 200 }}>
              { `${message.body.trim()}.` }
            </Col>
            <Col className="col text-center d-flex align-items-center justify-content-center gx-4" onClick={dismissAlert}>
              <FontAwesomeIcon icon={["fa", "xmark"]} />                
            </Col>
          </div>
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