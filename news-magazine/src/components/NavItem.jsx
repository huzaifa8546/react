import React from "react";

function NavItem({ title, description, src, url }) {
  // Reliable fallback images (static links)
  const fallbackImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", // Tech
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // Business
    "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80", // Health
    "https://images.unsplash.com/photo-1505842465776-3b4953ca4f77?auto=format&fit=crop&w=800&q=80", // Sports
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80", // World
  ];

  // Pick random fallback if no src
  const randomFallback =
    fallbackImages[Math.floor(Math.random() * fallbackImages.length)];

  return (
    <div
      className="card mb-3 d-inline-block mx-3 my-3 shadow-lg rounded-3"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || randomFallback}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top rounded-top"
        alt="news thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">
          {title?.slice(0, 40) || "Untitled"}
        </h5>
        <p className="card-text text-muted">
          {description
            ? description.slice(0, 90)
            : "No description available for this news. Click below to read the full story."}
        </p>
        <a href={url} className="btn btn-primary w-100">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NavItem;
