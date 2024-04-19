import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./movieSearchList.css";

const MovieSearchList = ({ movies }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        navigate(`/movie-description/${data.imdb_id}`);
      });
  };

  return (
    <div className="movie-search-list">
      <div className="movie-list row row-cols-2 row-cols-md-3 row-cols-lg-5 ">
        {movies &&
          movies.map((movie) => (
            <div className="col" key={movie.id}>
              <div className="single-movie">
                <img
                  onClick={() => handleMovieClick(movie.id)}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.Title}
                />
                <p className="movie-title">{movie.Title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieSearchList;
