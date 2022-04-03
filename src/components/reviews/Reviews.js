import useReviews from "../../hooks/useReviews";
import Review from "../review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  // useEffect(() => {
  //   fetch("review.json")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);
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
