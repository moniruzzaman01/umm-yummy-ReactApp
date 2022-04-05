import React from "react";
import img from "../../images/404.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={img} alt="" />
    </div>
  );
};

export default NotFound;
