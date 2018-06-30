import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../Login";
import Signup from "../Signup";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg" style={{ fontSize: 30, }}>
    <Link className="navbar-brand" to="/" style={{ fontSize: 40, textShadow: "2px 2px 8px black", }}>
      Home
    </Link>
    <div>
      <ul className="navbar-nav">
        <li>
          </li>

        { //Conditional on login
          props.user != null ? (
            // if the user is logged in
            <div>
            <li
              className={
                window.location.pathname === "/" ||
                  window.location.pathname === "/WriteStory"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/WriteStory" className="nav-link" style={{ textShadow: "2px 2px 6px black", }} >
                Write
          </Link>
            </li>

            <li
              className={
                window.location.pathname === "/StoryShare"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/StoryShare" className="nav-link" style={{ textShadow: "2px 2px 6px black", }}>
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
              <Link to="/Profile" className="nav-link" style={{ textShadow: "2px 2px 6px black", }}>
                Profile
          </Link>
            </li>
            <li
              className={
                window.location.pathname === "/Login"
                  ? "nav-item active"
                  : "nav-item"

              }
            >
              <p  style={{color: "steelBlue", textShadow: "2px 2px 6px black", }}  onClick={props.onLogOut}> LogOut</p>
            </li>
            </div>
          ) : (
              //if the user is logged out
              <div>

                <li
                  className={
                    window.location.pathname === "/Login"
                      ? "nav-item active"
                      : "nav-item"

                  }
                >
                  <Login onLogIn={props.onLogIn} style={{ textShadow: "2px 2px 6px black", }} />
                </li>

                <li
                  className={
                    window.location.pathname === "/Signup"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >

                  <Signup />

                </li>
              </div>
            )

        }


      </ul>
    </div>
  </nav>
);

export default Navbar;
