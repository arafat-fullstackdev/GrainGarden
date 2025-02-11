import React from "react";
import { NavbarBrand, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      color="Light"
      light-Expand="md"
    >
      <NavbarBrand href="/">E-Commerce</NavbarBrand>
    </Navbar>
  );
};

export default Navigation;
