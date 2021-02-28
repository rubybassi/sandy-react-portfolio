import PortfolioList from "../components/PortfolioList";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <main className="container">
        <section className="row">
          <h3 className="col-12 connect" style={{ fontSize: "260%" }}>My Work</h3>
          <div className="line2"></div>
        </section>
        <div className="row">
          <PortfolioList />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
