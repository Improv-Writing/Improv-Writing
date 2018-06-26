import React from 'react';
import { Card, Button, CardImg, CardHeader, CardBody,
  CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
//  import DeleteBtn from "../DeleteBtn";
import "./CardStoryShare.css";

const CardStoryShare = (props) => {
  return (
    <CardDeck> 
      <Card body outline color="secondary">
          <CardTitle>Author:</CardTitle>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>Title of the Story</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button className = "buttonLike">Like</Button>  
          <Button  className = "buttonComment">Comment</Button>
          
        </CardBody>
      </Card>
      <Card body outline color="secondary">
          <CardTitle>Author:</CardTitle>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>Title of the Story</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button className = "buttonLike">Like</Button>  
          <Button  className = "buttonComment">Comment</Button>
          </CardBody>
      </Card>
      <Card body outline color="secondary">
          <CardTitle>Author:</CardTitle>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>Title of the Story</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button className = "buttonLike">Like</Button>  
          <Button  className = "buttonComment">Comment</Button>        
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default CardStoryShare;