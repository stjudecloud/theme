import React from "react";
import { Alert } from "../src";

export default {
  title: "Alert",
  component: Alert,
};

export const Default = () => <Alert message= {{ type: "info", title: "I am a title", body: " i am the body " }} />;
export const Success = () => <Alert message= {{ type: "info", title: "I am a title", body: " i am the body " }} />;
export const Warning = () => <Alert message= {{ type: "info", title: "I am a title", body: " i am the body " }} />;
export const Error = () => <Alert message= {{ type: "info", title: "I am a title", body: " i am the body " }} />;
