import React, { useState, useEffect } from "react";
import Banner from "./Banner";

import "./homePage.css";
import MovieCardRow from "../components/MovieCardRow";

function HomePage() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
  const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);


  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results.slice(0, 8);
    } catch (error) {
      console.error("Error fetching movies:", error);
      return []; // Return an empty array in case of error
    }
  };


  useEffect(() => {
    fetchMovies(nowPlayingUrl).then((data) => {
      setNowPlayingMovies(data);
    });
  
    fetchMovies(topRatedUrl).then((data) => {
      setTopRatedMovies(data);
    });
  }, []);


  return (
    <div className="home-page">
      <Banner />

      <div className="home-page-content">
      <h3 className="section-title">Upcoming Movies</h3>
        <MovieCardRow movies={nowPlayingMovies}  />
        <br />
        <h3 className="section-title">Top Rated Movies</h3>
        <MovieCardRow movies={topRatedMovies}  />
      </div>
    </div>
  );
}

export default HomePage;
