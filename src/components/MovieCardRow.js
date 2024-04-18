import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieCardRow = ({movies}) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const navigate = useNavigate();

    const handleMovieClick = (id) => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            navigate(`/movie-description/${data.imdb_id}`);
          })
          .catch((error) => {
            console.log(error);
          });
      };

   
  return (
    <div className="row home-movie-list">
    {movies.slice(0, 6).map((movie) => (
      <div className="col-md-2" key={movie.id}>
        <div className="card h-100" onClick={()=>handleMovieClick(movie.id)} >
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
  )
}

export default MovieCardRow
