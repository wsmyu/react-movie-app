import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieReview from "../components/MovieReview";
import Button from "../components/Button";

function MovieDescription({ addToFavorites }) {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [nameText, setNameText] = useState("");

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

    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=41f83b90&plot=full`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(`data:`, data);
        console.log("fetch method called");
        setMovie(data);
      })
      .catch((error) => console.log(error));
  }, [imdbID]);

  return (
    <>
      <div className="movieDescription container ">
        <div className="row">
          <div className="col-md-3">
            <img src={movie.Poster} alt={movie.title} />
          </div>
          {/* Column for movie details and reviews */}{" "}
          <div className="col-md-9">
            <div className="movieDetails">
              <h2 style={{ marginBottom: "1rem" }}>{movie.Title}</h2>
              <p>Released Year: {movie.Year}</p>
              <p>Actors: {movie.Actors}</p>
              <p>Director: {movie.Director}</p>
              <p>Genre: {movie.Genre}</p>
              <p>Awards: {movie.Awards}</p>
              <p>{movie.Plot}</p>
              <Button
                text={"Add to Favorites"}
                onClick={handleAddToFavorites}
              />

              <MovieReview
                reviews={reviews}
                nameText={nameText}
                reviewText={reviewText}
                handleNameChange={handleNameChange}
                handleReviewChange={handleReviewChange}
                handleAddReview={handleAddReview}
              />
              <div className="review-section mt-3">
                <h3 style={{ color: "white" }}>Create Your Own Review</h3>
                <form onSubmit={handleAddReview}>
                  <div>
                    <input
                      type="text"
                      className="form-control w-25 text-white"
                      style={{ background: "transparent" }}
                      id={`responseName${reviews.length}`}
                      value={nameText}
                      placeholder="Please Enter Your Name"
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="mt-3">
                    <textarea
                      className="form-control text-white"
                      style={{ background: "transparent" }}
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
                    className="btn btn-secondary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieDescription;
