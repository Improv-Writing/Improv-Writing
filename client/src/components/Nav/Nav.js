
import React from "react";

const Nav = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("ImageSearch")}
        className={
          props.currentPage === "ImageSearch" ? "nav-link active" : "nav-link"
        }
      >
       Search for a gif
      </a>
    </li>
    
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Categories")}
        className={
          props.currentPage === "Categories" ? "nav-link active" : "nav-link"
        }
      >
       Categories
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("WriteStory")}
        className={
          props.currentPage === "WriteStory" ? "nav-link active" : "nav-link"
        }
      >
        Write Story
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("StoryShare")}
        className={
          props.currentPage === "StoryShare" ? "nav-link active" : "nav-link"
        }
      >
        Storyshare
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Profile")}
        className={
          props.currentPage === "Profile" ? "nav-link active" : "nav-link"
        }
      >
        Profile
      </a>
    </li>
  </ul>
);

export default Nav;
