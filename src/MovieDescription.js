import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';



function MovieDescription () {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState('');
 

  useEffect(() => {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=41f83b90&plot=full`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
          setMovie(json);
      })
      .catch(error => console.log(error));
  }, [imdbID]);

  return (
    <div className='movieDescription'>
        <img src={movie.Poster} />
        <div className='movieDetails'>
            <h1 style={{marginBottom:"1rem"}}>{movie.Title}</h1>
            <p>Released Year: {movie.Year}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Director:  {movie.Director}</p>
            
            <p>Genre: {movie.Genre}</p>
            <p>Awards: {movie.Awards}</p>

            <p>{movie.Plot}</p>
        </div>
       
    </div>
  );
};

export default MovieDescription;




