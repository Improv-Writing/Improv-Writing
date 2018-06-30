import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import SearchResultContainer from "../components/SearchResultContainer";
import Container from "../components/Container";
import { Grid, Col, Row } from "react-bootstrap";
import {Redirect } from 'react-router-dom';


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
  componentDidMount() {
    this.checkRandom()
    // this.handleSubmit()

  }

  componentWillReceivesProps() {
    this.checkRandom()
  }
  checkRandom = () => {
    const randomImage = this.props.match.params.random;
    if (randomImage) {
      this.setState({
        imageClicked: {
          title: "Random Image",
          src: "https://media3.giphy.com/media/" + randomImage + "/giphy.gif"
        }
      })
    }
  }

  handleChange(event) {
    this.setState({ textValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // if (this.state.storyText) {
    API.saveStory(this.state.textValue, this.state.imageClicked.src, this.state.imageClicked.title, false, 0)
      .then(alert("You submitted your story!"))
      .catch(err => console.log(err));
    // }
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
      (this.props.user != null) ? (
        <div key={this.props.match.params.random}>
          {this.state.imageClicked ? (
            <div style={{ marginLeft: 350, marginTop: 50, }}>
              <img
                alt={this.state.imageClicked.title}
                className="img-fluid"
                src={this.state.imageClicked.src}
                style={{ height: 300, webkitBoxShadow: "0 1px 20px 10px black", }}
              />
              <form onSubmit={this.handleSubmit} >
                <label>

                  <textarea value={this.state.textValue} onChange={this.handleChange} placeholder="Write your story based on your giphy!"
                    style={{ height: 300, width: 533, marginTop: 30, marginLeft: 0, marginBottom: 100, fontFamily: "Gloria Hallelujah, cursive", fontSize: 20, }} />
                </label>
                <input type="submit" value="Submit"
                  style={{ position: "absolute", marginLeft: 40, backgroundColor: "blue", color: "white", padding: 10, fontSize: 20, borderRadius: 6, boxShadow: "10px 10px 20px grey" }} />
              </form>
            </div>

          ) : (
              <div>
                <SearchResultContainer onImageClick={this.handleImageClick} />
              </div>
            )}

        </div>
      ) : (
          <Redirect to='/' />
        )
    );
  }
}
export default WriteStory;
