import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import SearchResultContainer from "../components/SearchResultContainer";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


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
        <Container>
        <Row>
        <Col size ="md-4">
        
      <SearchResultContainer onImageClick={this.handleImageClick}/>
      </Col>
      </Row>
      </Container>
      
      </div>
    );
  }
}
export default WriteStory;
