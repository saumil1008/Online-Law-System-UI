import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const AppHeader = props => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Law in India</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Navbar.Text>Signed in as: &nbsp;&nbsp;&nbsp;</Navbar.Text>
    <b>props.user</b>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button variant="outline-light">Sign out</Button>
  </Navbar>
);

export { AppHeader };
