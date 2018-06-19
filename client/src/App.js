import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavContainer from "./components/NavContainer";
// import Card from "./components/Card";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import StoryShare from "./pages/StoryShare";
import Profile from "./pages/Profile";
import WriteStory from "./pages/WriteStory";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Gifbackground from "./components/Gifbackground";

// const App = () => <NavContainer />;



const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/StoryShare" component={StoryShare} />

        {/* /* these are login only */}
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/WriteStory" component={WriteStory} />
        <Route exact path="/Categories" component={Categories} />
        <Route path="/NoMatch" component={NoMatch} />

        {/* <Route component={NoMatch} /> */}
    </Switch>
    </Wrapper>
    <Footer />
    </div>
  </Router>
);

export default App;
