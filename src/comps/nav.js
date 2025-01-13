import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const logo = "../media/coffee-logo/coffee-logo.jfif";
export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        
        
        <Navbar.Brand href="/">
        <img
        
        src={logo}
        width="30"
        height= "30"
        />
        MOCHA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>

            <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="/All-Games">All Games</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Anagram-Hunt">Anagram Hunt</NavDropdown.Item>
              <NavDropdown.Item href="Math-Games">Math Games</NavDropdown.Item>
              
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
  );
}


