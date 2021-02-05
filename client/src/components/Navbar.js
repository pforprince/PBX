import React from "react";
import { Nav, Navbar as Navbar1 } from "react-bootstrap";
const Navbar = () => {
  return (
    <>
      <Navbar1 bg="info" expand="lg">
        <Navbar1.Brand href="#home">React-Bootstrap</Navbar1.Brand>
        <Navbar1.Toggle aria-controls="basic-navbar-nav" />
        <Navbar1.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar1.Collapse>
      </Navbar1>
    </>
  );
};

export default Navbar;
