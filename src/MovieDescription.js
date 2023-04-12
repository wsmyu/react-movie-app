import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function MovieDescription({ addToFavorites,isViewingMovie,setIsViewingMovie }) {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [nameText, setNameText] = useState(''); 


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
    if (nameText.trim() !== '' && reviewText.trim() !== '') {
    const newReview = {
      name: nameText,
      text: reviewText,
      date: new Date().toLocaleDateString()
    };
    const storedReviews = JSON.parse(localStorage.getItem(imdbID)) || [];
    const newReviews = [...storedReviews, newReview];
    localStorage.setItem(imdbID, JSON.stringify(newReviews));
    setReviews(newReviews);
    setReviewText('');
    setNameText('');
  }
  };

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(imdbID));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  
    if (isViewingMovie) {
      const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=41f83b90&plot=full`;
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setMovie(json);
        })
        .catch(error => console.log(error));
    }
  }, [imdbID, isViewingMovie]);
  
  

 
      return (
        
        <div className='movieDescription'>
        <img src={movie.Poster} />
        <div className='movieDetails'>
          <h1 style={{ marginBottom: "1rem" }}>{movie.Title}</h1>
      
          <p>Released Year: {movie.Year}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Director:  {movie.Director}</p>

          <p>Genre: {movie.Genre}</p>
          <p>Awards: {movie.Awards}</p>

          <p>{movie.Plot}</p>
          <button className="btn btn-outline-success addFavourite" onClick={handleAddToFavorites}>
            Add to Favorites
          </button>

          <hr />
          <h2>Audience reviews</h2>
          <div className='reviewDisplay'>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div className="review" key={index}>
                    <p className='user-name'>{review.name}</p>
                    <p className="review-text">{review.text}</p>
                    <p className="review-date">{review.date}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
          </div>
        <br/>
        <h2>Reviews</h2>
        <form onSubmit={handleAddReview}>
          <div>
              <input 
                type="text" 
                className="form-control" 
                id="nameInput"
                value={nameText}
                placeholder='Please Enter Your Name'
                onChange={handleNameChange}
                style={{width:"30%"}} />
          </div>
          <div>
            <label htmlFor="reviewInput" className="form-label">Write a review</label>
            <textarea 
              className="form-control" 
              placeholder='Join the discussion!'
              id="reviewInput" 
              rows="3" 
              value={reviewText} 
              onChange={handleReviewChange}/>
          </div>
          <br/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
      </div>
      
    </div>
  
  );
 } 
export default MovieDescription;


