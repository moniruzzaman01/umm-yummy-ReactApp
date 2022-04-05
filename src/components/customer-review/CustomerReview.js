import React from "react";
import Review from "../review/Review";
import "./CustomerReview.css";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";

const CustomerReview = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();
  const goToReview = () => {
    const path = "/reviews";
    navigate(path);
  };
  return (
    <div className="customer-review-container">
      <h1>Customer Review</h1>
      <div className="customer-review">
        {reviews.slice(0, 3).map((review, index) => (
          <Review key={index} review={review}></Review>
        ))}
      </div>
      <button onClick={goToReview}>See all review</button>
    </div>
  );
};

export default CustomerReview;
