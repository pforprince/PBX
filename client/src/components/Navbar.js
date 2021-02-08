import React from "react";
import { Nav, Navbar as Navbar1 } from "react-bootstrap";
const Navbar = () => {
  return (
    <>
      <Navbar1 bg="info" expand="lg">
        <Navbar1.Brand href="#home">SwitchBoard</Navbar1.Brand>
        <Navbar1.Toggle aria-controls="basic-navbar-nav" />
        <Navbar1.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <input
                type="text"
                placeholder="Enter a number"
                className="form-controll"
              />
            </Nav.Link>
            <Nav.Link href="#home">
              <button className="btn btn-sm btn-secondary">Dial</button>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#link">
              <i className="far fa-question-circle"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fas fa-tv"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fas fa-user"></i>
            </Nav.Link>
            <Nav.Link href="#home">
              <i className="fa fa-bell" aria-hidden="true"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="fas fa-cogs"></i>
            </Nav.Link>
          </Nav>
        </Navbar1.Collapse>
      </Navbar1>
    </>
  );
};

export default Navbar;
