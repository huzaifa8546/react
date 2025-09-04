// 
import React, { useState, useEffect } from "react";

export const Navbar = ({ setCategory }) => {
  const [active, setActive] = useState("technology");
  

  const categories = [
    "general",
    "technology",
    "business",
    "health",
    "science",
    "sports",
    "entertainment",
  ];

  const handleClick = (cat) => {
    setCategory(cat);
    setActive(cat);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleClick("general");
          }}
        >
          <img
            className="rounded fs-4"
            src="https://static.vecteezy.com/system/resources/previews/017/265/436/non_2x/newspaper-paper-news-page-sheet-journal-magazine-newsprint-gazette-simple-cartoon-logo-design-vector.jpg"
            alt="Logo"
            style={{ height: "50px", width: "auto" }}
          />
          <span className="ms-2 fw-bold">NewsHub</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className={`nav-link btn btn-link ${
                    active === cat ? "active fw-bold text-primary" : ""
                  }`}
                  onClick={() => handleClick(cat)}
                  style={{ textTransform: "capitalize" }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
