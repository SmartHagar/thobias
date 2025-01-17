/** @format */

import React from "react";
import "../../public/styles/NotFound.css";
const NotFound = () => {
  return (
    <section className="absolute inset-0 h-svh w-screen  bg-primary">
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <a
          target="_blank"
          href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
          className="more-link"
        >
          Visit the original article
        </a>
      </div>
    </section>
  );
};

export default NotFound;
