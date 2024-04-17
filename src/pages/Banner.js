import React, { useEffect, useState } from "react";
import "./banner.css";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";

const Banner = () => {
  const apiKey = process.env._API_KEY;
  const [movies, setMovies] = useState([]);
  const fetchData = () => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner">
      <img
        src="https://image.tmdb.org/t/p/w500/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg"
        alt="Background"
        className="active bgImg"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <MovieContent />
          </div>
          <div className="col-lg-6 col-md-12">
            <MovieDate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
