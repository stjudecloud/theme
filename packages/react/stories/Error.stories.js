import React from "react";
import Error from "../src/Error";

export default {
  title: "Error",
  component: Error
};

export const Default = () => <Error />;
export const NotFound = () => <Error variant="notFound" />;
