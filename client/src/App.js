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



class App extends React.Component{

  constructor(props, context){
    super(props, context);

    this.state = {
      user: null
    }

    this.handleLogIn = this.handleLogIn.bind(this);
  }

handleLogIn(user){
  this.setState({
    user: user
  })
  alert(JSON.stringify(user));
}


  render(){
    return(
      <Router >
    <div >
      <Navbar user={this.state.user} onLogIn={this.handleLogIn}/>
      <Wrapper  >
      <Grid fluid= {true} style= {{marginLeft: 0, marginRight: 0, }}>
  <Row className="show-grid" >
    <Col xs={12} md={10} >
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} user={this.state.user}/>} />
        <Route exact path="/StoryShare" render={(props) => <StoryShare {...props} user={this.state.user}/>}  />

        {/* /* these are login only */}
        <Route exact path="/Profile" render={(props) => <Profile {...props} user={this.state.user}/>} />
        <Route exact path="/WriteStory" render={(props) => <WriteStory {...props} user={this.state.user}/>} />
        <Route path="/WriteStory/:random" render={(props) => <WriteStory {...props} user={this.state.user}/>}  />
        <Route path="/NoMatch" render={(props) => <NoMatch {...props} user={this.state.user}/>}  />

        {/* <Route component={NoMatch} /> */}
    </Switch></Col>
    <Col xs={8} md={2} style= {{
      paddingLeft: 20, margin: 0, fontSize: 18, borderLeft: "solid", borderRight: "solid", backgroundColor: "#DCDCDC", minHeight: 100, webkitBoxShadow: "0 10px 20px 5px black" }}>
      <Row style= {{ marginBottom: 60, marginTop: 30, justifyContent: 'center', fontFamily: "Paytone One, sans-serif", fontSize: 25, textShadow: "2px 2px 6px black",}}>
        <a href= "http://www.thesaurus.com/" target="_blank">Thesaurus</a>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 20, fontFamily: "Paytone One, sans-serif", color: "coral", fontSize: 25, textShadow: "2px 2px 6px black",}}>Word of the Day: </p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 40, fontFamily: "Gloria Hallelujah, cursive", fontSize: 25,}}>sublime</p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 20, fontFamily: "Paytone One, sans-serif", color: "seaGreen", fontSize: 25, textShadow: "2px 2px 6px black",}}>Image of the Day:</p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 40,}}>
          <Random/>
        </p>
      </Row>
      <Row style= {{justifyContent: 'center',}}>
        <p style= {{marginBottom: 60, fontFamily: "Paytone One, sans-serif", color: "teal", fontSize: 25, textShadow: "2px 2px 6px black",}}>
          <a href="mailto:Gifstories2018@gmail.com">
          About Us | Contact
          </a>
        </p>
      </Row>


    
    </Col>
  </Row>
</Grid>
    </Wrapper>
    <Footer style={{boxShadow: "10px 10px -20px grey"}} />
    </div>
  </Router>
    )
  }
}
// const App = () => (
  

// );
export default App;
