import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, comment, ratings } = review;
  return (
    <div className="review">
      <h1>{name}</h1>
      <p>{comment}</p>
      <p>Ratings: {ratings}</p>
    </div>
  );
};

export default Review;
