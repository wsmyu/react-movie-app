import React, { useEffect, useState } from "react";
import "./banner.css";
import MovieCarousel from "../components/MovieCarousel";
import Button from "../components/Button";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

const Banner = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchData = () => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setSelectedMovie(data.results[0].id);
        console.log("Fetched Movies:", data.results); // Log fetched movies
      })
      .catch((e) => console.log(e.message));
  };

  const handleSlideChange = (id) => {
    setSelectedMovie(id);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="banner">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt="Background"
                className={`bgImg ${
                  movie.id === selectedMovie ? "active" : undefined
                } `}
              />
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 ">
                    <div
                      className={`content ${
                        movie.id === selectedMovie ? "active" : undefined
                      } `}
                    >
                      <h2>{movie.title}</h2>
                      <h4>
                        <span>{new Date(movie.release_date).getFullYear()}</span>
                        <span>
                          <i>{<CiStar />}{movie.vote_average}</i>
                        </span>
                      </h4>
                      <p>{movie.overview}</p>
                      <Button icon={<CiHeart />} text="Favourite" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <div className={`date ${
                        movie.id === selectedMovie ? "active" : undefined
                      } `}><h2>{movie.release_date}</h2></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        {movies && movies.length > 0 && (
          <MovieCarousel
            slides={movies}
            handleSlideChange={handleSlideChange}
          />
        )}
      </div>
    </>
  );
};

export default Banner;
