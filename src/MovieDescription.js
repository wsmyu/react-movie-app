import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



function MovieDescription({ addToFavorites,isViewingMovie }) {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState('');

  const handleAddToFavorites = () => {
    const movieDetails = {
      title: movie.Title,
      imdbID: movie.imdbID,
      rating: movie.imdbRating,
      poster: movie.Poster,

    };
    addToFavorites(movieDetails);
  };

  useEffect(() => {
    if (isViewingMovie) {
      const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=41f83b90&plot=full`;
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setMovie(json);
        })
        .catch(error => console.log(error));
    } else {
      setMovie('');
    }
  }, [imdbID, isViewingMovie]);

  if (!isViewingMovie) {
    return null;
  }
  
  // useEffect(() => {
  //   const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=41f83b90&plot=full`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(json => {
  //       setMovie(json);
  //     })
  //     .catch(error => console.log(error));
  // }, [imdbID]);

  // useEffect(() => {
  //   if (isViewingMovie) {
  //     setIsViewingMovie(false);
  //   }
  // }, [isViewingMovie, setIsViewingMovie]);

  return (
    <div className='movieDescription'>
      <img src={movie.Poster} />
      <div className='movieDetails'>
        <h1 style={{ marginBottom: "1rem" }}>{movie.Title}</h1>
        <button className="btn btn-outline-success addFavourite" onClick={handleAddToFavorites}>
          Add to Favorites
        </button>

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





