import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg">
    <Link className="navbar-brand" to="/">
      Home
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/WriteStory"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/WriteStory" className="nav-link">
           Write 
          </Link>
        </li>

          <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/Categories"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/Categories" className="nav-link">
          Categories 
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/StoryShare"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/StoryShare" className="nav-link">
            Storyshare
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/Profile"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/Profile" className="nav-link">
            Profile
          </Link>
        </li>

      </ul>
    </div>
  </nav>
);

export default Navbar;
