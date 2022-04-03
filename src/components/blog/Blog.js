import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h2>What is context Api?</h2>
      <p>
        React gives us a way to pass data from one component to another
        component without pass props manualy. Context api helps us to do that
        work. it helps us to get data from parent, grand parent also great grand
        parent without props drilling. context api makes props drilling work
        easy. and we can pass securely from grand parent to grand child.
      </p>
      <h2>What is Semantic in html?</h2>
      <p>
        Semantic mean it has some menaing. in HTML semantic tag is some
        alternative tag of div which helps us to know about the element by
        seeing the name of that tag. semantic tag like article, section, main,
        aside etc. can helps us to give information about the target element.
      </p>
    </div>
  );
};

export default Blog;
