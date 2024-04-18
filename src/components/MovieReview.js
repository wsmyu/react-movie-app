import React, { useRef } from "react";
import "./movieReview.css";

const MovieReviews = ({
  reviews,
  nameText,
  reviewText,
  responseNameText,
  responseText,
  handleNameChange,
  handleReviewChange,
  handleAddReview,
}) => {
  const containerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-5 ">
      <h3 className="text-white">Audience Reviews</h3>
      {reviews.length > 0 ? (
        <div className="row">
          <div className="col-1 d-flex align-items-center">
            <button
              className="btn btn-dark rounded-circle"
              onClick={() => handleScroll(-400)}
            >
              &lt;
            </button>
          </div>
          <div className="col-10">
            <div
              className="row flex-nowrap overflow-hidden py-3"
              ref={containerRef}
            >
              {reviews.map((review, index) => (
                <div key={index} className="col-5 gap-3">
                  <div className="single-review">
                    <p className="user-name">{review.name}</p>
                    <p className="review-text">{review.text}</p>
                    <p className="review-date">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-1 d-flex align-items-center justify-content-end">
            <button
              className="btn btn-dark rounded-circle"
              onClick={() => handleScroll(400)}
            >
              &gt;
            </button>
          </div>
        </div>
      ) : (
        <div className="text-white">No reviews</div>
      )}
    </div>
  );
}

export default MovieReviews;
