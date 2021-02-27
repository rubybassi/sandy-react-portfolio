import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
    <Navbar expand="lg" variant="light" bg="light">
      <Link exact to="/" className="nav-link">Home</Link>
      <Link exact to="/Portfolio" className="nav-link">Portfolio</Link>
      <Link exact to="/Contact" className="nav-link">Contact</Link>
    </Navbar>
);

export default Header;