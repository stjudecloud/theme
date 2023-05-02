import * as React from 'react';

export interface MessageProps {
  type: string;
  title: string;
  body: string;
}

export interface AlertProps {
  messages: MessageProps;
  type: string;
}

declare class Alert extends React.Component<AlertProps> {}

export default Alert;
