import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => (
  <Container>
    <Navbar expand="lg" variant="light" bg="light">
      <NavLink exact to="/" className="nav-link">Home</NavLink>
      <NavLink exact to="/Portfolio" className="nav-link" activeClassName="selected">Portfolio</NavLink>
      <NavLink exact to="/Contact" className="nav-link">Contact</NavLink>
    </Navbar>
  </Container>
);

export default Header;