import React from 'react';
import { Card, Button, CardImg, CardHeader, CardBody,
  CardTitle, CardText, CardDeck, CardSubtitle } from 'reactstrap';
//  import DeleteBtn from "../DeleteBtn";
import "./CardStoryShare.css";
import emoji from 'react-easy-emoji';

const CardStoryShare = (props) => {
  return (

    <CardDeck style={{marginTop: 40,}}> 
      <Card body outline color="secondary" >
          <CardTitle style= {{fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 25, textShadow: "2px 2px 6px black",}}>Author:</CardTitle>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody >
          <CardSubtitle  style={{fontFamily: "Payton One, sans-serif", color: "steelBlue", fontSize: 20, fontWeight: "bold",}}>Title of the Story</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button className = "buttonLike">👍</Button>  
          <Button  className = "buttonLove"> 😍 </Button>
          <Button className= "buttonLol">🤣</Button>
          <Button className= "buttonScary">😨</Button>
          <Button className= "buttonSad">😭 </Button>
          <Button className= "buttonOnFire">🔥</Button>
          
        </CardBody>
      </Card>
      <Card body outline color="secondary">
          <CardTitle style= {{fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 25, textShadow: "2px 2px 6px black",}}>Author:</CardTitle>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardSubtitle style={{fontFamily: "Payton One, sans-serif", color: "steelBlue", fontSize: 20, fontWeight: "bold",}}>Title of the Story</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button className = "buttonLike">👍</Button>  
          <Button  className = "buttonLove">😍</Button>
          <Button className= "buttonLol">🤣</Button>
          <Button className= "buttonScary">😨</Button>
          <Button className= "buttonSad">😭 </Button>
          <Button className= "buttonOnFire">🔥</Button>
          </CardBody>
      </Card>
      <Card body outline color="secondary">
          <CardTitle style= {{fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 25, textShadow: "2px 2px 6px black",}}>Author:</CardTitle>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardSubtitle style={{fontFamily: "Payton One, sans-serif", color: "steelBlue", fontSize: 20, fontWeight: "bold",}}>Title of the Story</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button className = "buttonLike"> 👍</Button>  
          <Button  className = "buttonLove">😍</Button>
          <Button className= "buttonLol">🤣</Button>   
          <Button className= "buttonScary">😨</Button>
          <Button className= "buttonSad">😭 </Button>
          <Button className= "buttonOnFire">🔥</Button>     
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default CardStoryShare;