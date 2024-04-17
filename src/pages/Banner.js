import React, { useEffect, useState } from "react";
import "./banner.css";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import MovieCarousel from "../components/MovieCarousel";

const Banner = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey);
  const [movies, setMovies] = useState([]);
  const fetchData = () => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log("Fetched Movies:", data); // Log fetched movies
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner">
      <div className="movie">
        <img
          src="https://image.tmdb.org/t/p/w500/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg"
          alt="Background"
          className="active bgImg"
        />
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-lg-6 col-md-12 ">
              <MovieContent />
            </div>
            <div className="col-lg-6 col-md-12 ">
              <MovieDate />
            </div>
          </div>
          <div
            className="container mt-3"
            style={{ position: "relative", zIndex: "1000" }}
          >
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="movie-carousel-container">
                  {movies && movies.length > 0 && (
                    <MovieCarousel slides={movies}/>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
