//import HeroPic from "../assets/images/me.png";
import { user } from "../assets/Data";

const Home = () => (
  <div>
    <main class="container mt-5 mb-5 bg-light" id="showcase1">
      <section>
        <h1 class="pt-3">{user.name}</h1>
        <h3>Fullstack Developer</h3>
        <hr class="pb-1" />
        <div class="row">
          <div class="col-sm-5">
            <img
              src={user.profilePic}
              class="img-fluid pb-5"
              alt="woman taking selfy in Jeruselam"
            />
          </div>
          <div class="col-sm-7 px-3">
            <p class="lead">
              Hi, I'm Sandy – a junior fullstack web developer.
            </p>
            <p class="lead">
              I'm currently on an exciting journey with the University of
              Birmingham Bootcamp and i'm loving every minute of it!
            </p>
            <p class="lead">
              My passion for coding has comes from my love of problem solving
              and design - the joy in that moment when i find a solution to
              something that's been bugging me, whether it's working on
              spreadsheets in my day job as a Marketing Manager or creating
              something from scratch such as arts and craft.
            </p>
            <p class="lead">
              I look forward to building websites and applications that can
              address real-world problems. If you're looking for professional,
              junior fullstack developer, let's connect.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Home;
