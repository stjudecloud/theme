import React from "react";
import { Alert } from "../src";

export default {
  title: 'SJ React/Atoms/Alert',
  component: Alert,
};

export const DefaultOneline = () => <Alert message={{ type: "info", title: "Notification Title", body: "Here is the information or diections"}} style="oneline" autoDismiss={false} timeout={1000}/>;
export const SuccessOneline = () => <Alert message={{ type: "success", title: "I am a title", body: " i am the body"}} style="oneline"/>;
export const WarningOneLine = () => <Alert message={{ type: "warning", title: "I am a title", body: " i am the body"}} style="oneline"/>;
export const ErrorOneline = () => <Alert message={{ type: "error", title: "I am a title", body: " i am the body"}} style="oneline"/>;
export const ExtraLongMessageOneLine = () => <Alert message={{ type: "error", title: "My name is Giovanni Giorgio", body: "but everybody calls me Giorgio"}} style="oneline"/>;

export const DefaultMultiplelines = () => <Alert message={{ type: "info", title: "Notification Title", body: "Here is the information or diections" }} style="multiplelines"/>;
export const SuccessMultiplelines = () => <Alert message={{ type: "success", title: "I am a title", body: " i am the body" }} style="multiplelines"/>;
export const WarningMultiplelines = () => <Alert message={{ type: "warning", title: "I am a title", body: " i am the body" }} style="multiplelines"/>;
export const ErrorMultiplelines = () => <Alert message={{ type: "error", title: "I am a title", body: " i am the body" }} style="multiplelines"/>;
export const ExtraLongMessageMultiplelines = () => <Alert message={{ type: "error", title: "My name is Giovanni Giorgio", body: "but everybody calls me Giorgio." }} style="multiplelines"/>;
