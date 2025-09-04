import React, { useState } from "react";

export const Navbar = ({ setCategory }) => {
  const [active, setActive] = useState("technology");

  const handleClick = (category) => {
    setCategory(category);
    setActive(category);
  };

  const handleBrandClick = (e) => {
    e.preventDefault(); // Prevent default anchor navigation
    handleClick("general");
  };

  const categories = [
    "general", // Add general to categories if needed for completeness
    "technology",
    "business",
    "health",
    "science",
    "sports",
    "entertainment",
  ];

  return (
    <>
      <style>{`
        .navbar-simple {
          background: #f8f9fa;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          border-radius: 8px;
          padding: 0.5rem 1.5rem;
        }
        .navbar-brand {
          font-weight: 600;
          color: #333;
          cursor: pointer;
          user-select: none;
        }
        .nav-link.btn-link {
          color: #555;
          font-weight: 500;
          text-transform: capitalize;
          padding: 0.4rem 1rem;
          border-radius: 6px;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .nav-link.btn-link:hover {
          background-color: #e2e6ea;
          box-shadow: 0 3px 6px rgba(0,0,0,0.1);
        }
        .nav-link.btn-link.active,
        .nav-link.btn-link.fw-bold.text-primary.border-bottom {
          color: #0d6efd;
          background-color: #dbe4ff;
          box-shadow: inset 0 2px 4px rgba(13, 110, 253, 0.3);
        }
        .navbar-toggler {
          border-color: #ccc;
        }
        .navbar-toggler-icon {
          filter: none;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-simple">
        <div className="container-fluid">
          <a href="#" className="navbar-brand" onClick={handleBrandClick}>
            NewsHub
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
              {categories
                .filter((cat) => cat !== "general") // Optionally exclude "general" from buttons
                .map((cat) => (
                  <li className="nav-item" key={cat}>
                    <button
                      className={`nav-link btn btn-link ${
                        active === cat ? "active fw-bold" : ""
                      }`}
                      onClick={() => handleClick(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
