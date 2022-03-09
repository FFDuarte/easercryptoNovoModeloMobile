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

import './index.css'
import logo from '../../Assets/easeCrypto.png';

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
        <Navbar dark  expand="lg">
          <NavbarBrand href="/"  className='navbrand'><img  className='logoo' src={logo}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="nav" navbar>
              <NavItem>
                <NavLink ><a className='font' href=""> Home </a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><a className='font' href="#comofunciona">Como Funciona</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><a className='font'  href="#precos">Preços</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><a  href="#sobre" className='font'>Sobre</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><a href="#contato" className='font'>Contato</a></NavLink>
              </NavItem> 
              <NavItem>
                <NavLink className='d-none'>| LOGIN</NavLink  >
              </NavItem>
              <NavItem>
                <NavLink className='d-none'>| CADASTRO</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}