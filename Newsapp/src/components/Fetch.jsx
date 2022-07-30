import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Fetch = () => {
  const [news, setNews] = useState([]);
  const FetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6848432fc6384a9aa8e93d0c12306c33"
      )
      .then((res) => setNews(res.data.articles));
  };
  return (
    <div>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={FetchNews}>
              Fetch News
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((e) => {
            return (
              <div className="col-4">
                <div
                  className="card"
                  style={{ width: "18rem", height: "auto",marginBottom:"0.5 rem" }}
                >
                  <img
                    src={e.urlToImage}
                    className="card-img-top"
                    alt="News Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">{e.description}</p>
                    <Link to={"/newsdetails"} className="btn btn-primary">
                      Source
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
