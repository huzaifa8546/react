import React from "react";

function NavItem({ title, description, src, url }) {
  return (
    <div
      className="card mb-3 d-inline-block mx-3 my-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={
          src ||
          "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="
        }
        style={{ height: "200px", width: "330px" }}
        className="card-img-top "
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 10)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "No description available for this news. Click below to read the full story."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NavItem;
