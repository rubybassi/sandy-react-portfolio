import { portfolios } from "../assets/Data";
//import { useState, useEffect } from "react";

const Portfolio = () => {
  /*
  useEffect(() => {
    console.log("intial portfolio page rendered");
    const queryURL = "https://randomuser.me/api/?results=50";
    const fetchEmployees = async () => {
      const response = await fetch(queryURL);
      const payload = await response.json();
      console.log("response data", payload);
      setEmployees(payload.results || []); // if search fails fallbacks or empty array
    };
    fetchEmployees();
  }, []); */

  return (
    <div>
      {portfolios.map((portfolio) => (
        <div class="card mb-3">
          <img
            class="card-img-top img-fluid"
            src={portfolio.image}
            alt={portfolio.altTage}
          />
          <article class="card-body">
            <h5 class="card-title">{portfolio.name}</h5>
            <p class="card-text">{portfolio.description}</p>
            <a href={portfolio.link1} class="btn focus-btn">
              {portfolio.link1BtnName}
            </a>
            <a href={portfolio.link2} class="btn secondary-btn">
              {portfolio.link2BtnName}
            </a>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
