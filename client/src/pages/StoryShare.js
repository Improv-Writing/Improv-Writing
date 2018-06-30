import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import CardStoryShare from "../components/Card/CardStoryShare.js";
import { CardColumns } from 'reactstrap';
import { Redirect } from 'react-router-dom';






class StoryShare extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      publicStories: []
    }
  }


  componentDidMount() {
    API.publicStories()
      .then(res => this.setState({ publicStories: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    let users = [];
    if (this.state.publicStories.length != 0) {
      users = this.state.publicStories
      // console.log(this.state.publicStories)
    }
    return (
      //Conditional for login first logged in seccond not logged in
      (this.props.user != null) ? (
        <div>
          <div style={{ marginTop: 20, fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 40, textAlign: "center", textShadow: "2px 2px 6px black", }}>
            Gifstories from authors just like you:
    	</div>
          <CardColumns>
            {
              users.map(user => (
                user['stories'].map(story => (
                  <CardStoryShare story={story} author={user['username']} />
                ))
              ))
            }
          </CardColumns>
        </div>
      ) : (
          <Redirect to='/' />
        )
    );
  }
}

export default StoryShare;
