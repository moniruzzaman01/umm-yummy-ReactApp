import React, { useEffect, useState } from "react";
import Review from "../review/Review";
import "./CustomerReview.css";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="customer-review-container">
      <h1>Customer Review</h1>
      <div className="customer-review">
        {reviews.map((review, index) => (
          <Review key={index} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
