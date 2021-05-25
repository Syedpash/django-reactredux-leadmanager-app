import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/auth';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { isAuthenticated, user } = props.auth;
  const authLinks = (
    <>
      <NavItem className='p-3'>
        <strong>{user ? `Welcome ${user.username}` : ''}</strong>
      </NavItem>
      <NavItem>
        <Button color="info" onClick={props.logout}>
          <NavLink>Logout</NavLink>
        </Button>
      </NavItem>
    </>
  );
  const guestLinks = (
    <>
      <NavItem>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <NavLink>Register</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <NavLink>Login</NavLink>
        </Link>
      </NavItem>
    </>
  );
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="p-3 ">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ marginLeft: "auto" }} navbar>
            {
              isAuthenticated ? authLinks : guestLinks
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);