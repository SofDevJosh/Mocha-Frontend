import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/navbar-styles/navbar-styles.css";
import { Image } from 'react-bootstrap';
import logo from "../media/coffee-logo/coffee-logo.jpg";
export default function Navigation() {
  return (
    <Navbar expand="lg"  id="navigation">
      <Container >
        
        
        
        <Navbar.Brand href="/">
        <Image
        rounded
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
            <Nav.Link href="/shop">Shop</Nav.Link>
            <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="/All-Games">All Games</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Anagram-Hunt">Anagram Hunt</NavDropdown.Item>
              <NavDropdown.Item href="Math-Games">Math Games</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
  );
}


