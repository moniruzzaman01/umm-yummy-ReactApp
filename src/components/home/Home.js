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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In at ab
            molestiae quae ullam animi accusantium commodi amet, quod
            necessitatibus obcaecati nihil fuga soluta optio aut impedit, ad
            voluptates omnis?
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
