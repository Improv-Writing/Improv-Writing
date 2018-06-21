import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavContainer from "./components/NavContainer";
// import Card from "./components/Card";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import StoryShare from "./pages/StoryShare";
import Profile from "./pages/Profile";
import WriteStory from "./pages/WriteStory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Gifbackground from "./components/Gifbackground";
import {Grid, Col, Row} from "react-bootstrap";

// const App = () => <NavContainer />;



const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
      <Grid>
  <Row className="show-grid">
    <Col xs={12} md={10}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/StoryShare" component={StoryShare} />

        {/* /* these are login only */}
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/WriteStory" component={WriteStory} />
        
        <Route path="/NoMatch" component={NoMatch} />

        {/* <Route component={NoMatch} /> */}
    </Switch></Col>
    <Col xs={4} md={2}>
    <a href>Thesaurus</a>
    <p>Word of the Day: </p>
    <p>bla-bla</p>
    <p>Image of the Day</p>
    <p>ghkjhgk</p>

    <p>About Us | Contact</p>


    
    </Col>
  </Row>
</Grid>
    </Wrapper>
    <Footer />
    </div>
  </Router>

);
export default App;
