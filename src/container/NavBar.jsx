import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../container/NavBar.scss'
    

function NavBar() {
  return(
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Navbar.Brand href="#home">PIK</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#aboutUs">O nas</Nav.Link>
          <Nav.Link href="#ourOffer">Nasza oferta</Nav.Link>
          <Nav.Link href="#job">Praca</Nav.Link>
          <Nav.Link className="btn_contact btn_contact-mobile" href="#contact">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )}

  export default NavBar;