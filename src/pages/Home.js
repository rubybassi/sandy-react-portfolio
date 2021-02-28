import { user } from "../assets/Data";

const Home = () => (
  <div>
    <div className="bg2">
      <div className="container hero-text">
        <h1>{user.name}</h1>
        <h2>{user.jobTitle}</h2>
      </div>
    </div>
    <div className="bg">
      <div className="container about-wrapper">
          <div className="row">
            <div className=" me-text col">
              <h3 className="col about" style={{ fontSize: "260%" }}>About Me</h3>
              <div className="line"></div>
              <p>{user.p1}</p>
              <p>{user.p2}</p>
              <p>{user.p4}</p>
            </div>
            <div className="me-image col">
              <img src={user.profilePic} alt={user.altTag}/>
            </div>
          </div>
        </div>
    </div>
    <div className="bg3">
        <div className="container skills-wrapper">
          <div className="row">
            <h3 className="col-12 skills" style={{ fontSize: "260%" }}>What I do</h3>
            <div className="line"></div>
          </div>
          <div className="row skills-list">
            <div className="col">
              <img scr="" alt=""/>
              <h4>Development</h4>
              <p>
                HTML5, CSS, JavaScript, jQuery, Node.js, React, MongoDB, MySql,
                Responsive Web Design
              </p>
            </div>
            <div className="col">
            <img scr="" alt=""/>
              <h4>Technology</h4>
              <p>Git, GitHub, Terminal, Rest APIs, Webpack, Abode Illustrator / Photoshop / InDesign / Affter Effects </p>
            </div>
            <div className="col">
            <img scr="" alt=""/>
              <h4>Digital Marketing</h4>
              <p>SEO, Web Analytics, eCommerce CRO, Project Management, Marketing and Branding</p>
            </div>
          </div>
        </div>
    </div>
  </div>
);

export default Home;
