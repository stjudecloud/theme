import React from "react";
import { Alert } from "../src";

export default {
  title: "Alert",
  component: Alert,
};

export const Default = () => <Alert variant="info" />;
export const Success = () => <Alert variant="success" />;
export const Warning = () => <Alert variant="warning" />;
export const Error = () => <Alert variant="error" />;
