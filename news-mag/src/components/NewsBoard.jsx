import React, { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";
import { v4 as uuidv4 } from "uuid";
import "./NewBoard.css";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     if (!category || category.trim().length === 0) return;

  //     const fetchNews = async () => {
  //       setLoading(true);
  //       try {
  //         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
  //           import.meta.env.VITE_API_KEY
  //         }`;
  //         const response = await fetch(url);
  //         const data = await response.json();
  //         console.log("Fetched articles:", data.articles);

  //         if (data.status === "ok") {
  //           setArticles(data.articles || []);
  //         } else {
  //           console.error("NewsAPI returned an error:", data);
  //           setArticles([]);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching news:", error);
  //         setArticles([]);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchNews();
  //   }, [category]);
  useEffect(() => {
    if (!category || category.trim().length === 0) return;

    const fetchNews = async () => {
      setLoading(true);
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        console.log("Fetching URL:", url);

        const response = await fetch(url);
        const data = await response.json();

        console.log("Full API response:", data);

        if (data.status === "ok") {
          setArticles(data.articles || []);
        } else {
          console.error("NewsAPI returned an error:", data);
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="news-heading text-center my-4">
        Latest <span className="news-badge">{category.toUpperCase()}</span>
      </h2>

      {loading ? (
        <h4 className="text-center text-muted">Loading news...</h4>
      ) : articles.length === 0 ? (
        <h5 className="text-center text-secondary">
          No news available for this category.
        </h5>
      ) : (
        <div className="row justify-content-center">
          {articles.map((news) => (
            <div
              className="col-md-4 d-flex justify-content-center"
              key={uuidv4()}
            >
              <NewsItem
                title={news.title || "Untitled News"}
                description={news.description || "No description available."}
                src={
                  news.urlToImage ||
                  "https://via.placeholder.com/350x200?text=No+Image"
                }
                url={news.url}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
