import { user } from "../assets/Data";

const Home = () => (
  <section className="container mt-5 mb-5 bg-light">
    <h1 className="pt-3">{user.name}</h1>
    <h3>{user.jobTile}</h3>
    <hr className="pb-1" />
    <div className="row">
      <div className="col-sm-5">
        <img
          src={user.profilePic}
          className="img-fluid pb-5"
          alt={user.altTag}
        />
      </div>
      <div className="col-sm-7 px-3">
        <p className="lead">{user.p1}</p>
        <p className="lead">{user.p2}</p>
        <p className="lead">{user.p3}</p>
        <p className="lead">{user.p4}</p>
      </div>
    </div>
  </section>
);

export default Home;
