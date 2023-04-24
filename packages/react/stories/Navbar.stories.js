import React from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { Navbar } from "../src";
import { Link, MemoryRouter } from "react-router-dom";

export default {
  title: "Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    appName: {
      name: "App Name Storybook",
      defaultValue: "Portal Name",
      description: "Name of the application the Navbar is rendered on.",
      control: {
        type: "text",
      },
    },
  },
};

const props = {
  portalConfig: {
    title: "Genomics Platform",
    link: "/",
  },
  loginConfig: {
    loginLink: "/",
    show: true,
    loginButtonMessage: "Login",
  },
  userDropdownConfig: {
    logoutLink: "/",
    show: true,
  },
  userDropdownConfigWithInitials: {
    logoutLink: "/",
    show: true,
    initials: "JD",
  },
};

const NavbarTemplate = (props) => <Navbar {...props} />;

export const NoUserDropdowns = NavbarTemplate.bind({});
NoUserDropdowns.args = {
  portalConfig: props.portalConfig,
};

export const UserLoggedOut = NavbarTemplate.bind({});
UserLoggedOut.args = {
  portalConfig: props.portalConfig,
  loginConfig: props.loginConfig,
};

export const UserLoggedInWithoutInitials = NavbarTemplate.bind({});
UserLoggedInWithoutInitials.args = {
  portalConfig: props.portalConfig,
  userDropdownConfig: props.userDropdownConfig,
};

export const UserLoggedInWithInitials = NavbarTemplate.bind({});
UserLoggedInWithInitials.args = {
  portalConfig: props.portalConfig,
  userDropdownConfig: props.userDropdownConfigWithInitials,
};

export const NavLinks = NavbarTemplate.bind({});
NavLinks.args = {
  portalConfig: props.portalConfig,
  userDropdownConfig: {
    ...props.userDropdownConfigWithInitials,
    additionalItems: (
      <>
        <li>
          <Dropdown.Item disabled>Jane Doe</Dropdown.Item>
        </li>
        <Dropdown.Divider />
      </>
    ),
  },
  navLinksConfig: {
    show: true,
    navLinks: [
      {
        props: {
          to: "/data",
          as: Link,
          children: "Data Browser",
        },
      },
      {
        props: {
          to: "/workflows",
          as: Link,
          children: "Workflows",
        },
      },
      {
        props: {
          to: "/dashboard",
          as: Link,
          children: "My Dashboard",
        },
      },
      {
        props: {
          href: "/dnanexus",
          target: "_blank",
          rel: "noopener noreferrer",
          children: (
            <>
              <i className="fa fa-dna" /> DNAnexus
            </>
          ),
        },
      },
    ],
  },
};

export const UserLoggedInDropdownWithAdditionalItems = NavbarTemplate.bind({});
UserLoggedInDropdownWithAdditionalItems.args = {
  portalConfig: props.portalConfig,
  userDropdownConfig: {
    ...props.userDropdownConfigWithInitials,
    additionalItems: (
      <>
        <li>
          <Dropdown.Item disabled>Jane Doe</Dropdown.Item>
        </li>
        <Dropdown.Divider />
        <li>
          <Dropdown.Item>Profile Link</Dropdown.Item>
        </li>
      </>
    ),
  },
};

export const CustomDropdown = NavbarTemplate.bind({});
CustomDropdown.args = {
  portalConfig: props.portalConfig,
  userDropdownConfig: props.userDropdownConfigWithInitials,
  children: (
    <Dropdown className="user-dropdown" title="Custom Dropdown" align="end">
      <Dropdown.Toggle as={Nav.Link} className="profile-dropdown-toggle">
        <i className="fa fa-user-shield fa-white" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="profile-dropdown-menu">
        <ul className="list-unstyled">
          <li>
            <Dropdown.Item>Custom Option 1</Dropdown.Item>
          </li>
          <li>
            <Dropdown.Item>Custom Option 2</Dropdown.Item>
          </li>
          <li>
            <Dropdown.Item>Custom Option 3</Dropdown.Item>
          </li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  ),
};
