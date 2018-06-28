import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Example from "../components/Card/Test.js";
import CardProfile from "../components/Card/CardProfile"




class Profile extends Component {

  state = {
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.getUser();
  }

 getUser = () => {
    API.getUser()
      .then(res => this.setState({results: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div> 
      <CardProfile user={this.state.results} />
      
       <pre> {JSON.stringify(this.state.results, null, 4)}</pre>
      </div>
    );
  }	
}

export default Profile;
