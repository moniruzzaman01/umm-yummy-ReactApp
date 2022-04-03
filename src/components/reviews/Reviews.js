import React, { useEffect, useState } from "react";
import Review from "../review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="reviews">
      {reviews.map((review, index) => (
        <Review key={index} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
