import './App.css';
import Home from './Home';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Feedback from './Feedback';


function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">

      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList searchValue={searchValue} setSearchValue={setSearchValue} />

      <Routes>
        {searchValue.length === 0 && (
          <Route path="/" element={<Home setSearchValue={setSearchValue} />} />
        )}
        <Route path='/movielist' element={<MovieList searchValue={searchValue} setSearchValue={setSearchValue} />} />
        <Route path="/moviedescription/:imdbID" element={<MovieDescription />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>


    </div>
  );
}

export default App;
