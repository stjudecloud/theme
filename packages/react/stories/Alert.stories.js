import React from "react";
import { Alert } from "../src";

export default {
  title: "Alert",
  component: Alert,
};

export const Default = () => <Alert message= {{ type: "info", title: "Notification Title", body: "Here is the information or diections" }} />;
export const Success = () => <Alert message= {{ type: "success", title: "I am a title", body: " i am the body" }} />;
export const Warning = () => <Alert message= {{ type: "warning", title: "I am a title", body: " i am the body" }} />;
export const Error = () => <Alert message= {{ type: "error", title: "I am a title", body: " i am the body" }} />;
export const ExtraLongMessage = () => <Alert message= {{ type: "error", title: "My name is Giovanni Giorgio", body: "but everybody calls me Giorgio" }} />;
