import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import CardStoryShare from "../components/Card/CardStoryShare.js";




class StoryShare extends Component {


  render() {
    return (
      <div>
      <div style= {{marginTop: 20, fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 35, textAlign: "center", textShadow: "2px 2px 6px black",}}>
      Gifstories from authors just like you:
    	</div>
     <CardStoryShare />
      </div>
    );
  }
}

export default StoryShare;
