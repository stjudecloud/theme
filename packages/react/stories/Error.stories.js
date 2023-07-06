import React from "react";
import ErrorComponent from "../src/ErrorComponent";

export default {
  title: "Error",
  component: ErrorComponent
};

export const Default = () => <ErrorComponent />;
export const NotFound = () => <ErrorComponent variant="notFound" />;
