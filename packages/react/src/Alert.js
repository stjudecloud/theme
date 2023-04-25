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
  switch (message.type) {
    case "success":
      variantClass = "alert-success";
      break;
    case "warning":
      variantClass = "alert-warning";
      break;
    case "error":
      variantClass = "alert-error";
      break;
    case "info":
      variantClass = "alert-info";
      break;
    default:
      variantClass = "alert-info";
  }

  return (
    <ToastContainer position="bottom-center">
      <Toast onClose={() => setShowAlert(false)} className={`alert ${variantClass}`} show={showAlert} delay={3000} autohide>
        <Toast.Body>
          <div className="row d-flex flex-nowrapn g-0">
            <Col className="col-lg-1 text-center d-flex align-items-center justify-content-center gx-4">
              <FontAwesomeIcon icon={["fa", "circle-check"]} />
            </Col>
            <Col className="text-center d-flex align-items-center justify-content-center text-nowrap gx-3">
              <b>{ `${message.title}:` }</b>
            </Col>
            <Col className="text-center d-flex align-items-center justify-content-center text-nowrap" style={{marginRight: 200 }}>
              { message.body }
            </Col>
            <Col className="col-lg-1 text-center d-flex align-items-center justify-content-center gx-4" onClick={dismissAlert}>
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