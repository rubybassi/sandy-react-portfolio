import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { user } from "../assets/Data";
import Button from "react-bootstrap/Button";

const Contact = () => (
  <main className="bg3">
    <div className="container connect-wrapper">
      <div className="row">
        <h3 className="col-12 connect" style={{ fontSize: "260%" }}>Let's Talk</h3>
        <div className="line"></div>
      </div>
      <div className="row">
          <div className="col">
            <form>
              <div className="form-group row">
                  <label htmlFor="inputName" className="col-sm-2 form-control-label text-sm-right">Name</label>
                  <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="inputEmail" className="col-sm-2 form-control-label text-sm-right">Email</label>
                  <div className="col-sm-8">
                      <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="inputMessage"
                      className="col-sm-2 form-control-label text-sm-right">Message</label>
                  <div className="col-sm-8">
                      <textarea className="form-control" placeholder="Write me a message" rows="5" id="comment"></textarea>
                  </div>
              </div>
              <div className="col-sm-12 text-center">
                  <Button type="submit" style={{ backgroundColor: "#7c5a9d", border: "none"}}>Submit</Button>
              </div>
            </form>
          </div> 
        </div> 
      <div className="row socials">
          <div className="col">
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <a href={`mailto:${user.name}`}><p>{user.email}</p></a>
          </div>
          <div className="col">
            <span><FontAwesomeIcon icon={faMobile} /></span>
            <a href={`tel:${user.mobile}`}><p>{user.mobile}</p></a>
          </div>
          <div className="col">
            <span><FontAwesomeIcon icon={faGithub} /></span>
            <a href={`https://github.com/${user.github}`}><p>{user.github}</p></a>
          </div>
          <div className="col">
            <span><FontAwesomeIcon icon={faLinkedin} /></span>
            <a href={user.linkedin}><p>{user.name}</p></a>
          </div>
          <div className="col">
            <span><FontAwesomeIcon icon={faDownload} /></span>
            <a href="sandeep-bassi-CV.pdf" download><p> Download CV {user.cv}</p></a>
          </div>
        </div>
    </div>  
  </main>
);

export default Contact;
