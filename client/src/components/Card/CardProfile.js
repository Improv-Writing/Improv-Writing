import React from 'react';
import { Card, Button, CardImg, CardHeader, CardBody,
  CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
// import { DeleteBtn } from "./DeleteBtn/DeleteBtn.js";
// import ".CardProfile.css";
// import DeleteBtn from "../DeleteBtn";
import PropTypes from "prop-types";
import "./CardProfile.css";

const CardProfile = (props) => {
  return (
    <div>
      <p className ="yourProfile">Hello <span className="profileName"> ! </span></p>
    <CardDeck> 
      <Card body outline color="secondary">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Card Title</CardTitle>
          <CardSubtitle className="subTitle">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <Button style={{backgroundColor: "blue", color: "white", padding: 10, fontSize: 20, fontWeight: "bold", borderRadius: 6, boxShadow: "10px 10px 20px grey"}}>Share</Button>{' '}
          <Button style={{backgroundColor: "red", color: "white", padding: 10, fontSize: 20, fontWeight: "bold", borderRadius: 6, boxShadow: "10px 10px 20px grey"}}>Delete</Button>
            { /* <DeleteBtn />*/ } 
        </CardBody>
      </Card>
      <Card body outline color="secondary">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle className= "title">Card Title</CardTitle>
          <CardSubtitle className="subTitle">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <Button style={{backgroundColor: "blue", color: "white", padding: 10, fontSize: 20, fontWeight: "bold", borderRadius: 6, boxShadow: "10px 10px 20px grey"}}>Share</Button>{' '}
          <Button style={{backgroundColor: "red", color: "white", padding: 10, fontSize: 20, fontWeight: "bold", borderRadius: 6, boxShadow: "10px 10px 20px grey"}}>Delete</Button>
            { /* <DeleteBtn />*/ } 
        </CardBody>
      </Card>
      <Card body outline color="secondary">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle className= "title">Card Title</CardTitle>
          <CardSubtitle className="subTitle">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <Button style={{backgroundColor: "blue", color: "white", padding: 10, fontSize: 20, fontWeight: "bold", borderRadius: 6, boxShadow: "10px 10px 20px grey"}}>Share</Button>{' '}
          <Button style={{backgroundColor: "red", color: "white", padding: 10, fontSize: 20, fontWeight: "bold", borderRadius: 6, boxShadow: "10px 10px 20px grey"}}>Delete</Button>
            { /* <DeleteBtn />*/ } 
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
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