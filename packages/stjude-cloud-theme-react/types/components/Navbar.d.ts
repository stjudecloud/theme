import * as React from "react";

export interface NavbarProps {
  children?: React.ReactNode;
  portalTitle: string;
  PortalLink: string;
}

declare class Navbar extends React.Component<NavbarProps> {}

export default Navbar;
