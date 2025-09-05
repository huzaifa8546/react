import React from "react";

function NavBar({ setCategory }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              onClick={() => setCategory("general")}
            >
              General
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => setCategory("technology")}
            >
              Technology
            </a>

            <a
              className="nav-link"
              href="#"
              onClick={() => setCategory("business")}
            >
              Business
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => setCategory("health")}
            >
              Health
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => setCategory("sports")}
            >
              Sports
            </a>
            <a
              className="nav-link"
              href="#"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
