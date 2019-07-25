import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap'; 
 import {NavLink as RRNavLink} from 'react-router-dom';  

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false  
    };
  }  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={RRNavLink} to="/" exact>reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/" exact>Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/counter">Counter</NavLink>  
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/employees">Employees</NavLink>  
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/todos">Todos</NavLink>  
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}