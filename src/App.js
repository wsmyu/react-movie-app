import "./App.css";
import MovieDescription from "./pages/MovieDescriptionPage";
import { Router,Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./pages/Header";
import Favorites from "./pages/FavoritePage";
import Login from "./Login";
import Footer from "./pages/Footer";
import Banner from "./pages/Banner";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const addToFavorites = (newMovies) => {
    setFavorites((prevFavorites) => [...prevFavorites, newMovies]);
  };

  return (
  
      <div className="App">
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          currentUser={currentUser}
        />
        {/* <Banner /> */}
        <div className="content-page">
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route
              path="/movie-description/:imdbID"
              element={<MovieDescription addToFavorites={addToFavorites} />}
            />
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} setFavorites={setFavorites} />}
            />
             <Route
              path="/search-result/:searchQuery"
              element={<SearchResultPage />}
            />
            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
            />
          </Routes>
       
        </div>
        {/* <Footer /> */}
      </div>

  );
}

export default App;