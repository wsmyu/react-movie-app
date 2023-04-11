import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Home ({isViewingMovie,setIsViewingMovie}) {
  const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=babd534350a103aaf9523014b99d7ede`;
  const navigate = useNavigate();
 

    fetch(trendingUrl)
      .then(response => response.json())
      .then(json => {
        const trendingMovies = json.results;
        console.log(trendingMovies);
      })
      .catch(error => console.log(error));
      const [movies, setMovies] = useState([]);

      useEffect(() => {
        fetch(trendingUrl)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

  
  const handleMovieClick = (id) => {
 
    const url=`https://api.themoviedb.org/3/movie/${id}?api_key=babd534350a103aaf9523014b99d7ede&language=en-US`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsViewingMovie(true);
        console.log(data.imdb_id)
        navigate(`/moviedescription/${data.imdb_id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  


  return (
    <div className="container">
    <h1>Trending Movies</h1>
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-3" key={movie.id}>
          <div className="card" onClick={() => handleMovieClick(movie.id)}>
            <img
              className="card-img-top"
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
  </div>
);
};


export default Home;