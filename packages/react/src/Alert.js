import React, { useState } from "react";
import { Col, Toast, Row } from "react-bootstrap";
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

function Alert({style, variant, message, autohide, delay}) {
  const [showAlert, setShowAlert] = useState(true);

  autohide && typeof autohide === "boolean" ? autohide : false;
  autohide && delay && typeof delay === "number" ? delay : 5000;

  const dismissAlert = () => setShowAlert(!showAlert);

  let variantClass, icon, col;

  switch (variant) {
    case "success":
      variantClass = "alert-success";
      icon = (
        <FontAwesomeIcon icon={["fa", "circle-check"]} className="icon icon-success"/>
      )
      break;
    case "warning":
      variantClass = "alert-warning";
      icon = (
        <FontAwesomeIcon icon={["fa", "exclamation-circle"]} className="icon icon-warning"/>
      )
      break;
    case "error":
      variantClass = "alert-error";
      icon = (
        <FontAwesomeIcon icon={["fa", "exclamation-triangle"]} className="icon icon-error"/>
      )
      break;
    default:
      variantClass = "alert-info";
      icon = (
        <FontAwesomeIcon icon={["fa", "exclamation-circle"]} className="icon icon-info"/>
      )
  }

  switch (style) {
    case "multiplelines":
      col = (
        <>
          <Col className="flex flex-column gx-5">
            <Row className="text-nowrap fw-bold">
              { `${message.title.trim()}:` }
            </Row>
            <Row className="text-nowrap">
              { `${message.body.trim()}.` }
            </Row>
          </Col>
        </>
      )
      break;
    default:
      col = (
        <>
          <Col className="flex flex-row text-nowrap">
            <div class="d-flex flex-row mr-3">
              <div class="p-2 fw-bold">{ `${message.title.trim()}:` }</div>
              <div class="p-2">{ `${message.body.trim()}.` }</div>
            </div>
          </Col>
        </>
      )
  }

  return (
    <ToastContainer position="bottom-center">
      <Toast onClose={() => setShowAlert(false)} 
             className={`alert ${variantClass}`} 
             show={showAlert} 
             delay={delay}
             autohide={autohide}>
        <Toast.Body>
          <Row className="no-gutters g-0">
            <Col className="col-1 d-flex align-items-center justify-content-end">
              { icon }
            </Col>
            {col}
            <Col className="col-1 d-flex align-items-center justify-content-center" onClick={dismissAlert}>
              <FontAwesomeIcon icon={["fa", "xmark"]} size="lg" className="icon-grey" />              
            </Col>
          </Row>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

Alert.displayName = "St.Jude Cloud Alert";
Alert.propTypes = {
  style: PropTypes.oneOf(["oneline", "multiplelines"]),
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]),
  message: {
    title: PropTypes.string,
    body: PropTypes.string,
  },
  autohide: PropTypes.bool,
  delay: PropTypes.number,
}

export default Alert;