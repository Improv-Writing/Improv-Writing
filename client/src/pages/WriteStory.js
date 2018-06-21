import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import SearchResultContainer from "../components/SearchResultContainer";
import Container from "../components/Container";
import { Grid, Col, Row } from "react-bootstrap";

class WriteStory extends Component {
  constructor() {
    super();
    this.state = {
      imageClicked: null,
      
    };
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ textValue: event.target.value });
  }

  handleSubmit(event) {
    alert("Story submitted");
    event.preventDefault();
  }

  handleImageClick(value) {
    console.log("handleImageClick fired");
    console.log(value.props);
    this.setState({
      imageClicked: value.props
    })
  }


  render() {
    return (
      <div>
        {this.state.imageClicked ? (
          <div style= {{marginLeft: 350, marginTop: 50,}}>
            <img
              alt={this.state.imageClicked.title}
              className="img-fluid"
              src={this.state.imageClicked.src}
              style= {{height: 300,}}
            />
            <form onSubmit={this.handleSubmit} >
              <label>
            
          <textarea value={this.state.textValue} onChange={this.handleChange} placeholder="Write your story!" style={{height: 300, width: 533, marginTop: 30, marginLeft: 0, marginBottom: 100, }}/>
              </label>
              <input type="submit" value="Submit" style={{position: "absolute", marginLeft: 40, backgroundColor: "blue", color: "white", padding: 10, fontSize: 20,}}/>
            </form>
          </div>

        ) : (
            <div>
              <SearchResultContainer onImageClick={this.handleImageClick} />
            </div>
          )}

      </div>
    );
  }
}
export default WriteStory;
