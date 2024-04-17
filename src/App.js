import "./App.css";
import Home from "./pages/HomePage";
import MovieList from "./MovieList";
import MovieDescription from "./pages/MovieDescriptionPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./pages/Header";
import Favorites from "./pages/FavoritePage";
import Login from "./Login";
import Footer from "./pages/Footer";
import Banner from "./pages/Banner";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [isViewingMovie, setIsViewingMovie] = useState(false);
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
        setIsViewingMovie={setIsViewingMovie}
        currentUser={currentUser}
      />
      <Banner />
      <div className="content-page">
        <MovieList
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setIsViewingMovie={setIsViewingMovie}
        />

        <Routes>
          {searchValue.length === 0 && (
            <Route
              path="/"
              element={
                <Home
                  setSearchValue={setSearchValue}
                  isViewingMovie={isViewingMovie}
                  setIsViewingMovie={setIsViewingMovie}
                />
              }
            />
          )}

          <Route
            path="/moviedescription/:imdbID"
            element={
              <MovieDescription
                addToFavorites={addToFavorites}
                isViewingMovie={isViewingMovie}
                setIsViewingMovie={setIsViewingMovie}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                user={user}
                setUser={setUser}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
