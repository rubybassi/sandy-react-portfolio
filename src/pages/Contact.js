import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { user } from "../assets/Data";

const Contact = () => (
  <main className="container mt-5 mb-5 bg-light">
    <section>
      <h1 className="pt-3">Let's Connect...</h1>
      <hr className="pb-1" />
      <div className="container">
        <a href={`mailto:${user.name}`}>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            {user.email}
          </p>
        </a>
        <a href={`tel:${user.monile}`}>
          <p>
            <FontAwesomeIcon icon={faMobile} />
            {user.mobile}
          </p>
        </a>
        <a href={`https://github.com/${user.github}`}>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            {user.github}
          </p>
        </a>
        <a href={user.linkedin}>
          <p>
            <FontAwesomeIcon icon={faLinkedin} />
            {user.name}
          </p>
        </a>
        
        <a href="sandeep-bassi-CV.pdf" download>
          <p>
            <FontAwesomeIcon icon={faDownload} />
            Download CV {user.cv}
          </p>
        </a>
      </div>
    </section>
  </main>
);

export default Contact;
