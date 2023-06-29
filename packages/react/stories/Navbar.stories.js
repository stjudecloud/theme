import React from "react";
import {Dropdown, Nav} from 'react-bootstrap';
import Navbar from "../src/Navbar";

export default {
  title: 'SJ React/Atoms/NavBar',
  component: Navbar,
  argTypes: {
    appName: {
      name: 'App Name Storybook',
      defaultValue: "Portal Name",
      description: "Name of the application the Navbar is rendered on.",
      control: {
        type: 'text'
      }
    }
  }
};

export const NoUserDropdowns = ({appName}) => (
    <Navbar
      portalConfig={{title: appName, link: "/"}}
    />
);

export const UserLoggedOut = ({appName}) => (
    <Navbar
      portalConfig={{title: appName, link: "/"}}
      loginConfig={{loginLink: "/", show: true, loginButtonMessage: "Login"}}
    />
);

export const UserLoggedIn = ({appName}) => (
  <Navbar
    portalConfig={{portalTitle: appName, portalLink: "/"}}
    userDropdownConfig={{logoutLink: "/logout", show: true}}
  />
);

export const UserLoggedInDropdownWithAdditionalItems = ({appName}) => (
  <Navbar
    portalConfig={{portalTitle: appName, portalLink: "/"}}
    userDropdownConfig={{logoutLink: "/", show: true, additionalItems: (
      <>
        <li>
          <Dropdown.Item>
            Username
          </Dropdown.Item>
        </li>
        <Dropdown.Divider />
        <li>
          <Dropdown.Item>
            Profile Link
          </Dropdown.Item>
        </li>
      </>
    )}}
  />
);

export const CustomDropdown = ({appName}) => {
  // Force react-bootstrap to render the dropdown markdown so CSS can animate
  // the slide on toggle. After setting `show`, immediately unset to allow
  // dropdowns to function normally and independently.
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    setShow(null);
  }, []);

  return (
    <Navbar
      portalConfig={{portalTitle: appName, portalLink: "/"}}
      userDropdownConfig={{logoutLink: "/", show: true}}
    >
      <Dropdown className="user-dropdown" title="Custom Dropdown" align="end">
        <Dropdown.Toggle as={Nav.Link} className="profile-dropdown-toggle">
          <i className="fa fa-user-shield fa-white" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="profile-dropdown-menu" show={show}>
          <ul className="list-unstyled">
            <li>
              <Dropdown.Item>
                Custom Option 1
              </Dropdown.Item>
            </li>
            <li>
              <Dropdown.Item>
                Custom Option 2
              </Dropdown.Item>
            </li>
            <li>
              <Dropdown.Item>
                Custom Option 3
              </Dropdown.Item>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
}
