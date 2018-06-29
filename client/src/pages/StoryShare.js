import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import CardStoryShare from "../components/Card/CardStoryShare.js";




class StoryShare extends Component {
constructor(props, context){
  super(props, context);
  this.state = {
    publicStories: []
  }
} 


  componentDidMount(){
    API.publicStories()
    .then(function(res) {
        alert(JSON.stringify(res.data, null, 4));
    })
  }

  render() {
    return (
      <div>
      <div style= {{marginTop: 20, fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 40, textAlign: "center", textShadow: "2px 2px 6px black",}}>
      Gifstories from authors just like you:
    	</div>
     <CardStoryShare />
      </div>
    );
  }
}

export default StoryShare;
