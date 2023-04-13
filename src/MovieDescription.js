import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MovieDescription({ addToFavorites,isViewingMovie,setIsViewingMovie }) {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [nameText, setNameText] = useState(''); 
  const [responseText, setResponseText] = useState('');
  const [responseNameText, setResponseNameText] = useState('');


  const handleNameChange = (e) => {
    setNameText(e.target.value);
  };
  const handleResponseNameChange = (e) => {
    setResponseNameText(e.target.value);
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
      date: new Date().toLocaleDateString(),
      responses: []
    };
    const storedReviews = JSON.parse(localStorage.getItem(imdbID)) || [];
    const newReviews = [...storedReviews, newReview];
    localStorage.setItem(imdbID, JSON.stringify(newReviews));
    setReviews(newReviews);
    setReviewText('');
    setNameText('');
  }
  };


const handleResponseChange = (e) => {
  setResponseText(e.target.value);
};



const handleAddResponse = (e, reviewIndex) => {
  e.preventDefault();
  if (responseNameText.trim() !== '' && responseText.trim() !== '') {
    const storedReviews = JSON.parse(localStorage.getItem(imdbID)) || [];
    const reviewToUpdate = storedReviews[reviewIndex];
  
    if (!reviewToUpdate.responses) {
      reviewToUpdate.responses = [];
    }
    const newResponse = {
      name: responseNameText,
      text: responseText,
      date: new Date().toLocaleDateString(),
    };
    reviewToUpdate.responses.push(newResponse);
    localStorage.setItem(imdbID, JSON.stringify(storedReviews));
    setReviews(storedReviews);
    setResponseText('');
    setResponseNameText('');
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
       <>
       {isViewingMovie ? (
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
      <div className='reviewDisplay'>
      <h3 style={{color:'white'}}>Audience Reviews</h3>
    
      {reviews && reviews.length > 0 ? (
        reviews.map((review, reviewIndex) => (
          <div className="review" key={reviewIndex}>
            <p className='user-name'>{review.name}</p>
            <p className="review-text">{review.text}</p>
            <p className="review-date">{review.date}</p>
            {review.responses && review.responses.length > 0 && (
              <div className="responses">
                <h4 style={{color:"#919194",textAlign:"center"}}>Replies</h4>
                {review.responses.map((response, responseIndex) => (
                  <div className="response" key={responseIndex}>
                    <p className='user-name'>{response.name}</p>
                    <p className="response-text">{response.text}</p>
                    <p className="response-date">{response.date}</p>
                  </div>
                ))}
              </div>
            )}
            <form style={{marginTop:"20px",marginLeft:"3rem",marginRight:"20px"}} 
                onSubmit={(e) => handleAddResponse(e, reviewIndex)}>
              <div>
                <input 
                  type="text" 
                  className="form-control" 
                  id={`responseName${reviewIndex}`}
                  value={responseNameText}
                  placeholder='Please Enter Your Name'
                  onChange={handleResponseNameChange}
                  style={{width:"30%", marginBottom:"1rem"}}
                />
              </div>
              <div>
                <textarea 
                  className="form-control" 
                  placeholder='Join the discussion!'
                  id={`responseInput${reviewIndex}`}
                  rows="2"
                  value={responseText} 
                  onChange={handleResponseChange}
                />
              </div>
              <button style={{marginTop:'10px'}} type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
    <br/>
    <h3 style={{color:'white'}}>Create Your Own Review</h3>
    <form onSubmit={handleAddReview}>
      <div>
        <input 
          type="text" 
          className="form-control" 
          id={`responseName${reviews.length}`}
          value={nameText}
          placeholder='Please Enter Your Name'
          onChange={handleNameChange}
          style={{width:"30%"}} 
        />
      </div>
      <div>
        <label htmlFor="reviewInput" className="form-label">Write a review</label>
        <textarea 
          className="form-control" 
          placeholder='Write some reviews'
          id={`responseInput${reviews.length}`}  
          rows="3" 
          value={reviewText} 
          onChange={handleReviewChange}
        />
      </div>
          
          <button style={{marginTop:'10px'}}type="submit" className="btn btn-primary">Submit</button>
        </form>
        
      </div>
      
    </div>
 
       ) :null}

</>
  );
}
export default MovieDescription;


