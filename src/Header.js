import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap';

function Header (props)  {
  const handleInputChanges = (e) => {
    props.setSearchValue(e.target.value);
  };

   
  return (
    <div className='navbar'>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Movie Purchasing App</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link className='navLink' href="/favourites">Favourites</Nav.Link>
            <Nav.Link className='navLink' href="/cart" >Cart</Nav.Link>
            <Nav.Link className='navLink' href="/feedback" >Feedback</Nav.Link>
          </Nav>
          <input value={props.searchValue} onChange={handleInputChanges} type="text" />
        </Container>
        
      </Navbar>

     </div>
      
  )
}

export default Header
