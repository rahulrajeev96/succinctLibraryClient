import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar style={{ zIndex: 1 }} className="bg-secondary sticky-top w-100">
      <Container>
        <Navbar.Brand as={Link} to="./" className="text-light fw-bolder">
          <i className="fa-brands fa-bluesky fa-fade"></i> SUCCINCT{" "}
          <i className="fa-solid fa-earth-americas fa-bounce"></i> LIBRARIES{" "}
          <i className="fa-brands fa-bluesky fa-fade "></i>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;