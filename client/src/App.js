import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavContainer from "./components/NavContainer";
// import Card from "./components/Card";
import ImageSearch from "./pages/ImageSearch";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import StoryShare from "./pages/StoryShare";
import Profile from "./pages/Profile";
import WriteStory from "./pages/WriteStory";
import Nav from "./components/Nav";


// const App = () => <NavContainer />;



const App = () => (
  <Router>
    <div>
      <Nav />
      {/* <SearchResultContainer /> */}
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/StoryShare" component={StoryShare} />

        {/* these are login only */}
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/WriteStory" component={WriteStory} />
        <Route exact path="/ImageSearch" component={ImageSearch} />
        <Route exact path="/NoMatch" component={NoMatch} />

        {/* <Route component={NoMatch} /> */}
    </Switch>
    </div>
  </Router>
);

export default App;
