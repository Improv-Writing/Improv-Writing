import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import ImageSearch from "./pages/ImageSearch/ImageSearch";
import NoMatch from "./pages/NoMatch/NoMatch";
import Profile from "./pages/Profile/Profile";
import StoryShare from "./pages/StoryShare/StoryShare";
import WriteStory from "./pages/WriteStory/WriteStory";


class NavContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "ImageSearch") {
      return <ImageSearch />;
    } else if (this.state.currentPage === "NoMatch") {
      return <NoMatch />;
    } else if (this.state.currentPage === "Profile") {
      return <Profile />; 
    } else if (this.state.currentPage === "StoryShare") {
        return <StoryShare />;
      } else (this.state.currentPage === "WriteStory"); {
        return <WriteStory />
      }
    
    };


  render() {
    return (
      <div>
        <Nav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default NavContainer;
