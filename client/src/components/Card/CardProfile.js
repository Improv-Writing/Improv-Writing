import React, { Component } from "react";
import {
  Card, Button, CardImg, CardHeader, CardBody,
  CardTitle, CardText, CardDeck, CardSubtitle, CardColumns
} from 'reactstrap';
// import { DeleteBtn } from "./DeleteBtn/DeleteBtn.js";
// import ".CardProfile.css";
// import DeleteBtn from "../DeleteBtn";
import PropTypes from "prop-types";
import "./CardProfile.css";
import Col from "../Col";
import API from "../../utils/API";

class CardProfile extends Component {
  constructor(){
    super();
    this.handleShareClick = this.handleShareClick.bind(this);
  }


  handleShareClick() {
    console.log(this.props.story['storyId']);
    API.shareStory(this.props.story['storyId'])
      .then(res => alert('Your Story Shared!!!'))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Card body outline color="secondary">
          <CardImg top width="100%" src={this.props.story['storyImgUrl']} alt={this.props.story['storyImgName']} />
          <CardBody>
            {/* <CardTitle className="title">Card Title</CardTitle> */}
            <CardText>{this.props.story['storyText']}</CardText>
            <CardText>
            </CardText>
            <Button onClick = {this.handleShareClick} style={{ backgroundColor: "blue", color: "white", padding: 10, fontSize: 20, fontWeight: "bold", borderRadius: 6, boxShadow: "10px 10px 20px grey" }}>Share</Button>{' '}
            <Button style={{ backgroundColor: "red", color: "white", padding: 10, fontSize: 20, fontWeight: "bold", borderRadius: 6, boxShadow: "10px 10px 20px grey" }}>Delete</Button>
            { /* <DeleteBtn />*/}
          </CardBody>
        </Card>
      </div>
    );
  }
};


Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string
}


export default CardProfile;