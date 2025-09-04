import "./NewsItem.css";
import React from "react";

export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card news-card mb-4 d-inline-block mx-3"
      style={{ width: "350px", border: "none", borderRadius: "20px" }}
    >
      <div className="img-container">
        <img
          src={
            src
              ? src
              : "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="
          }
          className="card-img-top"
          alt="news"
          style={{
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />
        <div className="img-overlay"></div>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{title.slice(0, 50)}...</h5>
        <p className="card-text text-muted">
          {description
            ? description.slice(0, 90)
            : "No description available for this news. Click below to read the full story."}
        </p>
        <a
          href={url}
          className="btn btn-dark px-4 py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};
