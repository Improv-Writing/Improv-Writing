import React from 'react';
import { Card, Button, CardImg, CardHeader, CardBody,
  CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
//  import DeleteBtn from "../DeleteBtn";
//https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"
import "./CardStoryShare.css";
import emoji from 'react-easy-emoji';
import Counter from './Counter.js';

const CardStoryShare = (props) => {
  return (

      <Card body outline color="secondary" >
          <CardTitle style= {{fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 25, textShadow: "2px 2px 4px black",}}>Author: {props.author}</CardTitle>
        <CardImg top width="100%" src={props.story.storyImgUrl} alt={props.story.storyImgName} />
        <CardBody >
          {/* <CardSubtitle  style={{fontFamily: "Payton One, sans-serif", color: "steelBlue", fontSize: 20, fontWeight: "bold",}}>Title of the Story</CardSubtitle> */}
          <CardText>{props.story.storyText}</CardText>
          <Counter/>
          
        </CardBody>
      </Card>
  );
};

export default CardStoryShare;