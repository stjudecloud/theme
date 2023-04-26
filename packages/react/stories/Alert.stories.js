import React from "react";
import { Alert } from "../src";

export default {
  title: 'SJ React/Atoms/Alert',
  component: Alert,
};

export const DefaultOneline = () => <Alert message={{ type: "info", title: "Notification Title", body: "Here is the information or diections" }} />;
export const SuccessOneline = () => <Alert message={{ type: "success", title: "I am a title", body: " i am the body" }} />;
export const WarningOneLine = () => <Alert message={{ type: "warning", title: "I am a title", body: " i am the body" }} />;
export const ErrorOneline = () => <Alert message={{ type: "error", title: "I am a title", body: " i am the body" }} />;
export const ExtraLongMessageOneLine = () => <Alert message={{ type: "error", title: "My name is Giovanni Giorgio", body: "but everybody calls me Giorgio" }} />;
