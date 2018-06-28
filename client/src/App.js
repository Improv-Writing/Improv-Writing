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
import Random from "./components/Random";
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
        <Route path="/WriteStory/:random" component={WriteStory} />
        <Route path="/NoMatch" component={NoMatch} />

        {/* <Route component={NoMatch} /> */}
    </Switch></Col>
    <Col xs={8} md={2} style= {{
      paddingLeft: 20, margin: 0, fontSize: 18, borderLeft: "solid", borderRight: "solid", backgroundColor: "#DCDCDC", minHeight: 100, }}>
      <Row style= {{ marginBottom: 90, marginTop: 20, justifyContent: 'center', fontWeight: "bold",}}>
        <a href= "http://www.thesaurus.com/" target="_blank">Thesaurus</a>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{ marginBottom: 20, color: "blue", fontWeight: "bold", }}>Word of the Day: </p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 90,}}>sublime</p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 20, color: "red", fontWeight: "bold",}}>Image of the Day:</p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 90,}}>
          <Random/>
        </p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{color: "green", fontWeight: "bold",}}>About Us | Contact</p>
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
