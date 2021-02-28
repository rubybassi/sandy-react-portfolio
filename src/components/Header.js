import { Link } from "react-router-dom";

const Header = () => (

    <div className="nav-wrapper">
      <nav className="nav">
        <Link to="/" className="nav-link"><p>Home</p></Link>
        <Link to="/Portfolio" className="nav-link"><p>Portfolio</p></Link>
        <Link to="/Contact" className="nav-link"><p>Contact</p></Link>
      </nav>
    </div>


);

export default Header;
