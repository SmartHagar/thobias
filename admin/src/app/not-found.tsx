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
        <a target="_blank" href="/" className="more-link">
          Kembali Ke Halaman Utama
        </a>
      </div>
    </section>
  );
};

export default NotFound;
