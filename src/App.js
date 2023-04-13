import './App.css';
import Home from './Home';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Feedback from './Feedback';
import Favorites from "./Favorites";
import Login from "./Login";
import Footer from './Footer';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isViewingMovie, setIsViewingMovie] = useState(false);
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState('');


  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

 

  return (
    <div className="App">

      <Header searchValue={searchValue} setSearchValue={setSearchValue} setIsViewingMovie={setIsViewingMovie} currentUser={currentUser}/>
      <MovieList searchValue={searchValue} setSearchValue={setSearchValue} setIsViewingMovie={setIsViewingMovie}  />
      
      <Routes>
        {searchValue.length === 0 && (
          <Route path="/" element={<Home setSearchValue={setSearchValue} isViewingMovie={isViewingMovie}
          setIsViewingMovie={setIsViewingMovie} />} />
        )}
    
        <Route path="/moviedescription/:imdbID" element={<MovieDescription 
        addToFavorites={addToFavorites} 
        isViewingMovie={isViewingMovie} 
        setIsViewingMovie={setIsViewingMovie}/>} 
        />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}/>} />
        <Route path="/login" element={<Login user={user} setUser={setUser} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />

      </Routes>
      <Footer />


    </div>
  );
}

export default App;
