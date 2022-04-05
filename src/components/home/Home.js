import React from "react";
import "./Home.css";
import logo from "../../images/home-img.jpg";
import CustomerReview from "../customer-review/CustomerReview";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="details">
          <h2>
            Umm-Yummy<sub>Home of your desired food.</sub>
          </h2>
          <p>
            Tasty and Healthy foods are waiting for you here. You just need to
            come and grave those. We are welcoming you here.
          </p>
          <button>More...</button>
        </div>
        <div className="img">
          <img src={logo} alt="" />
        </div>
      </div>
      <CustomerReview />
    </div>
  );
};

export default Home;
