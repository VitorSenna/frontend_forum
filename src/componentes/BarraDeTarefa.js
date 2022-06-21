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
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Menu
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <NavLink href="/auth/login">Login</NavLink>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
            <NavLink href="/auth/register">Cadastre-se</NavLink>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
            <NavLink href="/register/ideia">Crie sua ideia</NavLink> 
            </DropdownItem>
            <DropdownItem divider />
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