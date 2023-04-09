import './App.css';
import Home from './Home';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Feedback from './Feedback';
import Favorites from "./Favorites";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  return (
    <div className="App">

      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList searchValue={searchValue} setSearchValue={setSearchValue} />

      <Routes>
        {searchValue.length === 0 && (
          <Route path="/" element={<Home setSearchValue={setSearchValue} />} />
        )}
        <Route path='/movielist' element={<MovieList searchValue={searchValue} setSearchValue={setSearchValue} />} />
        <Route path="/moviedescription/:imdbID" element={<MovieDescription addToFavorites={addToFavorites}/>} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}/>} />

      </Routes>


    </div>
  );
}

export default App;
