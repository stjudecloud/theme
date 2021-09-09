import * as React from "react";

export interface ErrorComponentProps {
  variant?: "notFound" | "internalServerError";
}

declare class ErrorComponent extends React.Component<ErrorComponentProps> {}

export default ErrorComponent;
