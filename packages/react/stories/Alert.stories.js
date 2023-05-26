import React from "react";
import { Alert } from "../src";

export default {
  title: 'SJ React/Atoms/Alert',
  component: Alert,
};

export const DefaultOneline = () =>
  <Alert
    message={{ title: "Do you know?", body: "My cat can backflip"}}
    style="oneline" 
    autohide={false} 
    delay={5000} 
    variant="info"
  />;

export const SuccessOneline = () => 
  <Alert 
    message={{ title: "I am a title", body: " i am the body" }} 
    style="oneline"
    autohide={true}
    delay={6000}
    variant="success"
  />;

export const WarningOneLine = () => 
  <Alert 
    message={{title: "Warning", body: "Hungry kitten is approaching"}}
    style="oneline"
    autohide={false}
    delay={5000}
    variant="warning"
  />;

export const ErrorOneline = () =>
  <Alert 
    message={{ type: "error", title: "My Cat is", body: "Broken"}} 
    style="oneline"
    autohide={true}
    delay={5000}
    variant="error"
  />;

export const ExtraLongMessageOneLine = () => 
  <Alert 
    message={{title: "My name is Giovanni Giorgio", body: "but everybody calls me Giorgio, Giorgio"}}
    style="oneline"
    autohide={true}
    delay={5000}
    variant="error"
  />;

export const DefaultMultiplelines = () =>
  <Alert 
    message={{title: "Warning", body: "Hungry kitten is approaching"}}
    style="multiplelines"
    autohide={true}
    delay={5000}
    variant="info"
  />;

export const SuccessMultiplelines = () =>
  <Alert
    message={{title: "I am a title", body: " i am the body" }} 
    style="multiplelines"
    autohide={false}
    delay={5000}
    variant="success"
  />;

export const WarningMultiplelines = () =>
  <Alert 
    message={{title: "I am a title", body: " i am the body" }} 
    style="multiplelines"
    autohide={false}
    delay={5000}
    variant="warning"
  />;

export const ErrorMultiplelines = () => 
  <Alert 
    message={{title: "I am a title", body: " i am the body" }} 
    style="multiplelines"
    variant="error"
    autohide={true}
    delay={2000}
  />;

export const ExtraLongMessageMultiplelines = () => 
  <Alert 
    message={{title: "My name is Giovanni Giorgio", body: "but everybody calls me Giorgio." }} 
    style="multiplelines"
    autohide={true}
    delay={5000}
    variant="error"
  />;
