import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Banner from "./Banner";


function HomePage ({setIsViewingMovie}) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
  const topRatedUrl =
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  const [movies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const navigate = useNavigate();
 
  
  // useEffect(() => {
  //   fetch(trendingUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMovies(data.results.slice(0, 8));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   fetch(topRatedUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTopRatedMovies(data.results.slice(0, 8));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handleMovieClick = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsViewingMovie(true);
        navigate(`/movie-description/${data.imdb_id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
  
    <div className="home-page">
      <Banner />
      {/* <h3>Trending Movies</h3>
      <div className="row home-movie-list">
        {movies.slice(0, 6).map((movie) => (
          <div className="col-md-2" key={movie.id}>
            <div className="card" onClick={() => handleMovieClick(movie.id)}>
              <img
                className="home-movie-poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/><br/>
      <h3>Top Rated Movies</h3>
      <div className="row home-movie-list">
        {topRatedMovies.slice(0, 6).map((movie) => (
          <div className="col-md-2" key={movie.id}>
            <div className="card" onClick={() => handleMovieClick(movie.id)}>
              <img
                className="home-movie-poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
            </div>
            </div>

          </div>
        ))}
      </div> */}
    </div>
  );


};


export default HomePage;