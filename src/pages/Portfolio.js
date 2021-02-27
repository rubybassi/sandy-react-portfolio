import PortfolioList from "../components/PortfolioList";

const Portfolio = () => {
  return (
    <main className="container mt-5 bg-light">
      <section>
        <h1 className="pt-3">My Work</h1>
        <hr className="pb-1" />
        <div className="row">
          <div className="row">
            <PortfolioList />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
