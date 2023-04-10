import React, { useState, useEffect} from 'react';
import{BrowserRouter,Route,Routes,Link,useNavigate} from 'react-router-dom';


 
function MovieList ({searchValue,setSearchValue,setIsViewingMovie})  {

  const [movies,setMovies] =useState([]);
  

  const getMovieRequest = (searchValue) => {
    const url =  `https://www.omdbapi.com/?s=${searchValue}&apikey=41f83b90&plot=full`;
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        setMovies(json.Search);
        console.log(movies)
      })
      .catch((error) => console.log(error));
  };


 
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);


  const navigate = useNavigate();
  

  const handleMovieClick = (movie) => {
    setIsViewingMovie(true);
    navigate(`/moviedescription/${movie.imdbID}`);
    setSearchValue('');
  };

  return (
    <div className="movieList">
      {movies &&
        movies.map((movie) => (
          <div className="singleMovie" key={movie.imdbID}>
            <img
              onClick={() =>  handleMovieClick(movie)}
              src={movie.Poster}
              alt={movie.Title}
            />
            
          </div>
        ))}
    </div>
  );
};

export default MovieList;







