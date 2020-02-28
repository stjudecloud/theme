import React from "react";
import { StaticRouter } from "react-router-dom";
import Navbar from "../src/Navbar";

export default {
  title: "Navbar",
  component: Navbar
};

export const Default = () => (
  <StaticRouter>
    <Navbar portalTitle="Storybook Sample" portalLink="/" />
  </StaticRouter>
);
