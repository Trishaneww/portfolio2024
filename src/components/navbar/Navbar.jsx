import './Navbar.scss';
import { Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();


  return (
    <div>
      <ul className="navbar">
        <li className={location.pathname === "/" ? "navbar-active" : ""}>
          <a href="/">Work /</a>
        </li>

        <li className={location.pathname === "/about" ? "navbar-active" : ""}>
          <a href="/about">About</a>
        </li>

        <li className={location.pathname === "/projects" ? "navbar-active" : ""}>
          <a href="/projects">Gallery</a>
        </li>

        <li className={location.pathname === "/notes" ? "navbar-active" : ""}>
          <a href="/notes">Notes</a>
        </li>

        <li className={location.pathname === "/contact" ? "navbar-active" : ""}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar