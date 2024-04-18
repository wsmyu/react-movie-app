import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import MovieReview from "../components/MovieReview";

function MovieDescription({ addToFavorites }) {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [nameText, setNameText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [responseNameText, setResponseNameText] = useState("");

  const handleNameChange = (e) => {
    setNameText(e.target.value);
  };

  const handleAddToFavorites = () => {
    const movieDetails = {
      title: movie.Title,
      imdbID: movie.imdbID,
      rating: movie.imdbRating,
      poster: movie.Poster,
    };
    addToFavorites(movieDetails);
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (nameText.trim() !== "" && reviewText.trim() !== "") {
      const newReview = {
        name: nameText,
        text: reviewText,
        date: new Date().toLocaleDateString(),
        responses: [],
      };
      const storedReviews = JSON.parse(localStorage.getItem(imdbID)) || [];
      const newReviews = [...storedReviews, newReview];
      localStorage.setItem(imdbID, JSON.stringify(newReviews));
      setReviews(newReviews);
      setReviewText("");
      setNameText("");
    }
  };


  
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(imdbID));
    if (storedReviews) {
      setReviews(storedReviews);
    }

    // if (isViewingMovie) {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=41f83b90&plot=full`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
      })
      .catch((error) => console.log(error));
    // }
  }, [imdbID]);

  return (
    <>
      <div className="movieDescription container pt-5">
        <img src={movie.Poster} alt={movie.title} />
        <div className="movieDetails">
          <h1 style={{ marginBottom: "1rem" }}>{movie.Title}</h1>
          <p>Released Year: {movie.Year}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Director: {movie.Director}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Awards: {movie.Awards}</p>
          <p>{movie.Plot}</p>
          <Button text={"Add to Favorites"} onClick={handleAddToFavorites} />

        
          <MovieReview
            reviews={reviews}
            nameText={nameText}
            reviewText={reviewText}
            responseNameText={responseNameText}
            responseText={responseText}
            handleNameChange={handleNameChange}
            handleReviewChange={handleReviewChange}
            handleAddReview={handleAddReview}
     
          />
          <br />
          <h3 style={{ color: "white" }}>Create Your Own Review</h3>
          <form onSubmit={handleAddReview}>
            <div>
              <input
                type="text"
                className="form-control"
                id={`responseName${reviews.length}`}
                value={nameText}
                placeholder="Please Enter Your Name"
                onChange={handleNameChange}
                style={{ width: "30%" }}
              />
            </div>
            <div>
              <label htmlFor="reviewInput" className="form-label">
                Write a review
              </label>
              <textarea
                className="form-control"
                placeholder="Write some reviews"
                id={`responseInput${reviews.length}`}
                rows="3"
                value={reviewText}
                onChange={handleReviewChange}
              />
            </div>

            <button
              style={{ marginTop: "10px" }}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default MovieDescription;
