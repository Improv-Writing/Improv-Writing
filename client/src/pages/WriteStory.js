import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import SearchResultContainer from "../components/SearchResultContainer";


// 

class WriteStory extends Component {

 handleImageClick(){
   alert("Some text");
 }


  render() {
    return (
      <div>
      <SearchResultContainer onImageClick={() => this.handleImageClick()}/>
      </div>
    );
  }
}
export default WriteStory;
