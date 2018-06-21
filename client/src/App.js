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
import {Grid, Col, Row} from "react-bootstrap";

// const App = () => <NavContainer />;



const App = () => (
  <Router >
    <div >
      <Navbar />
      <Wrapper  >
      <Grid fluid= {true} style= {{marginLeft: 0, marginRight: 0, }}>
  <Row className="show-grid" >
    <Col xs={12} md={10} >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/StoryShare" component={StoryShare}  />

        {/* /* these are login only */}
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/WriteStory" component={WriteStory} />
        <Route exact path="/Categories" component={Categories} />
        <Route path="/NoMatch" component={NoMatch} />

        {/* <Route component={NoMatch} /> */}
    </Switch></Col>
    <Col xs={8} md={2} style= {{
      paddingLeft: 20, margin: 0, fontSize: 18, borderLeft: "solid", borderRight: "solid", backgroundColor: "#DCDCDC", }}>
      <Row style= {{ marginBottom: 90, marginTop: 20, justifyContent: 'center',}}>
        <a href= "http://www.thesaurus.com/" target="_blank">Thesaurus</a>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{ marginBottom: 20, color: "blue", }}>Word of the Day: </p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 90,}}>eloquent</p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 20, color: "red",}}>Image of the Day:</p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 90,}}>ghkjhgk</p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{color: "green",}}>About Us | Contact</p>
      </Row>


    
    </Col>
  </Row>
</Grid>
    </Wrapper>
    <Footer />
    </div>
  </Router>

);
export default App;
