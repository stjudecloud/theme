import * as React from "react";

export interface PortalConfig {
  title: string;
  link: string;
}

export interface LoginConfig {
  show?: boolean;
  loginLink: string;
  loginButtonMessage?: string;
}

export interface UserDropdownConfig {
  show?: boolean;
  logoutLink: string;
  additionalItems?: React.ReactNode;
}

export interface NavbarProps {
  children?: React.ReactNode;
  portalConfig: PortalConfig;
  loginConfig: LoginConfig;
  userDropdownConfig: UserDropdownConfig;
}

declare class Navbar extends React.Component<NavbarProps> {}

export default Navbar;
