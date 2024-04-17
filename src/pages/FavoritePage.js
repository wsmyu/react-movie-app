import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Favorites(props) {
    const clearFavorites = () => {
        props.setFavorites([]);
    };

    return (
        <div style={{ minHeight: 'calc(100vh - 200px)'}}>
            {/*Map the movie name and rating as the list */}
            <div className="focusText">
                {props.favorites.map((movie, index) => (
                    <FavoriteMovie key={index} movie={movie} />
                ))}
            </div>


            {/*//button to clear the favorites */}
            <button className="btn btn-danger" onClick={clearFavorites}>Clear</button>
        </div>
    );
}

export default Favorites

function FavoriteMovie({ movie }) {
    return (
        <div className="favorite-movie" >
            <span>
                <Link to={`/moviedescription/${movie.imdbID}`}>
                    <img src={movie.poster} alt={movie.title} />
                </Link>
                <span>{movie.title} </span>
                <button
                    className="btn btn-warning"
                    onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`)}
                >
                    IMDb Rating: {movie.rating}
                </button>            
            </span>
        </div>
    );
}