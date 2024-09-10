
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import { NavbarBrand } from 'react-bootstrap';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
<Container>

<Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/public/logoo.jpg" 
            alt="logo"
            width="100" 
            height="70"

  
  />
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#Menu">Inicio</Nav.Link>
            <Nav.Link href="#home">Categorías</Nav.Link>
            <Nav.Link href="#link">Soporte</Nav.Link>
            <NavDropdown title="Catálogo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Camisetas Futbol</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shorts deportivos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Shorts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default BasicExample;






