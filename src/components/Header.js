import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
    <Navbar expand="lg" variant="light" bg="light">
      <NavLink exact to="/" className="nav-link">Home</NavLink>
      <NavLink exact to="/Portfolio" className="nav-link" activeClassName="selected">Portfolio</NavLink>
      <NavLink exact to="/Contact" className="nav-link">Contact</NavLink>
    </Navbar>
);

export default Header;