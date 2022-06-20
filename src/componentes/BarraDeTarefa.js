import React from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown, Container, Row, Col } from "reactstrap";
function BarraDeTarefa(){
    return(
        <div>
  <Navbar
    color="light"
    expand="xl"
    fixed="top"
    full
    light
  >
    <NavbarBrand href="/">
      Forum de Ideias
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Logout
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
    )
}
export default BarraDeTarefa;