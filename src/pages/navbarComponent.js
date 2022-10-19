import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Navbar fixed='top' style={{backgroundColor:'rgba(247, 247, 247, 0.8)'}}>
        <NavbarToggler onClick={toggleNavbar} className="me-2">
          <span className="navbar-toggler-icon" id={!collapsed ? 'open' : 'close'}></span>
        </NavbarToggler>
        <NavbarBrand className="me-auto" style={{fontWeight:'bold'}}>
          MARA GROUP
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={{marginLeft:'80px'}}>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sudut-lenggah">SUDUT LENGGAH</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">NAIRA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">KAINGARA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">KAET</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">KUTAMARA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">BALE MARA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">SUDUT LENGGAH PUNCAK</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">RUMA MARA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">CONTACT US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;