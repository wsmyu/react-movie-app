import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import Searchbox from "../components/Searchbox";
import { CiLogin } from "react-icons/ci";
import Button from "../components/Button";

function Header(props) {
  const handleInputChanges = (e) => {
    props.setIsViewingMovie(false);
    props.setSearchValue(e.target.value);
  };

  const handleLogoClick = () => {
    props.setSearchValue("");
  };

  return (
    <div className="header">
      <a href="/" className="logo">
        MovieMax
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
      <Searchbox />
      <Button icon={<CiLogin />} text="Sign in" />
    </div>
    // <div className='navbar'>
    //   <Navbar bg="dark" variant="dark">
    //     <Container>
    //       <Link to="/" className="navbar-brand" onClick={handleLogoClick}>MovieMax</Link>
    //       <Nav className='me-auto'>
    //         <LinkContainer to="/favorites">
    //           <Nav.Link className='navLink'>Favourites</Nav.Link>
    //         </LinkContainer>
    //         <LinkContainer to="/login">
    //           <Nav.Link className='navLink'>Account</Nav.Link>
    //         </LinkContainer>

    //       </Nav>
    //       <input value={props.searchValue} placeholder='Search' onChange={handleInputChanges} type="text" />
    //     </Container>

    //   </Navbar>

    // </div>
  );
}

export default Header;
