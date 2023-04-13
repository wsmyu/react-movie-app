import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap';

function Header(props) {

  const handleInputChanges = (e) => {
    props.setIsViewingMovie(false);
    props.setSearchValue(e.target.value);
  };

  const handleLogoClick = () => {
    props.setSearchValue('');
  }

  return (
    <div className='navbar'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand" onClick={handleLogoClick}>Movie Purchasing App</Link>
          <Nav className='me-auto'>
            <LinkContainer to="/favorites">
              <Nav.Link className='navLink'>Favourites</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link className='navLink'>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/comparison">
              <Nav.Link className='navLink'>Price Comparison</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/feedback">
              <Nav.Link className='navLink'>Feedback</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link className='navLink'>Account</Nav.Link>
            </LinkContainer>
          </Nav>
          <input value={props.searchValue} placeholder='Search' onChange={handleInputChanges} type="text" />
        </Container>

      </Navbar>

    </div>

  )
}

export default Header
