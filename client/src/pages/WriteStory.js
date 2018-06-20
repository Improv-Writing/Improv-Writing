import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import SearchResultContainer from "../components/SearchResultContainer";
import Container from "../components/Container";
import {Grid, Col, Row} from "react-bootstrap";

class WriteStory extends Component {
  constructor(){
    super();
    this.state = {

    };
    this.handleImageClick = this.handleImageClick.bind(this);
  }
  
 handleImageClick(value){
   console.log("handleImageClick fired");
   console.log(value);
 }


  render() {
    return (
      <div>        
        
      <SearchResultContainer onImageClick={this.handleImageClick}/>
     
      </div>
    );
  }
}
export default WriteStory;
