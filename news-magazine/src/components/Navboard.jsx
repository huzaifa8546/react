import React from "react";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";

function Navboard({ category }) {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        LATEST <span className="badge text-bg-secondary bg-danger">NEWS</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NavItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
}

export default Navboard;
