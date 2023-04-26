import React from "react";
import { ErrorComponent } from "../src";

export default {
  title: 'SJ React/Atoms/Error',
  component: ErrorComponent,
};

export const Default = () => <ErrorComponent />;
export const NotFound = () => <ErrorComponent variant="notFound" />;
