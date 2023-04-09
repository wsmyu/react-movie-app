import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap';

function Header(props) {
  const handleInputChanges = (e) => {
    props.setSearchValue(e.target.value);
  };


  return (
    <div className='navbar'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Movie Purchasing App</Navbar.Brand>
          <Nav className='me-auto'>
            <LinkContainer to="/favourites">
              <Nav.Link className='navLink'>Favourites</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link className='navLink'>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/feedback">
              <Nav.Link className='navLink'>Feedback</Nav.Link>
            </LinkContainer>
          </Nav>
          <input value={props.searchValue} onChange={handleInputChanges} type="text" />
        </Container>

      </Navbar>

    </div>

  )
}

export default Header
