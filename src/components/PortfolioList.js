import { portfolios } from "../assets/Data";
import Button from "react-bootstrap/Button";

const PortfolioList = () => {
  return (
    <>
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="col-lg-4" id="portfolio">
          <div className="card mb-3">
            <img
              className="card-img-top img-fluid"
              src={portfolio.image}
              alt={portfolio.altTag}
            />
            <article className="card-body">
              <h5 className="card-title">{portfolio.name}</h5>
              <p className="card-text">{portfolio.description}</p>
              <Button href={portfolio.link1} variant="outline-dark" size="sm">
                {portfolio.link1BtnName}
              </Button>{" "}
              <Button href={portfolio.link2} variant="outline-dark" size="sm">
                {portfolio.link2BtnName}
              </Button>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioList;
