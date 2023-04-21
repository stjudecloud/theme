import React from "react";
import { Toast } from "react-bootstrap";
import ToastContainer from 'react-bootstrap/ToastContainer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faCircleCheck,
  faExclamationCircle,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCircleCheck,
  faExclamationCircle,
  faExclamationTriangle
);

function Alert({ variant }) {
  return (
    <ToastContainer position="bottom-center">
      <Toast>
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Alert;