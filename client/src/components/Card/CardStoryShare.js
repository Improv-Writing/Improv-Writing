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

    <CardDeck style={{marginTop: 20,}}> 
      <Card body outline color="secondary" >
          <CardTitle style= {{fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 25, textShadow: "2px 2px 4px black",}}>Author: Terra_Angel1234</CardTitle>
        <CardImg top width="100%" src="https://media0.giphy.com/media/pB6Nfy3n2Z2Zq/giphy.gif" alt="Card image cap" />
        <CardBody >
          {/* <CardSubtitle  style={{fontFamily: "Payton One, sans-serif", color: "steelBlue", fontSize: 20, fontWeight: "bold",}}>Title of the Story</CardSubtitle> */}
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Counter/>
          
        </CardBody>
      </Card>
      <Card body outline color="secondary">
          <CardTitle style= {{fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 25, textShadow: "2px 2px 4px black",}}>Author: Drakeamus_Prime</CardTitle>
        <CardImg top width="100%" src="https://media1.giphy.com/media/eenzqB2MsGKbK/giphy.gif" alt="Card image cap" />
        <CardBody>
          {/* <CardSubtitle style={{fontFamily: "Payton One, sans-serif", color: "steelBlue", fontSize: 20, fontWeight: "bold",}}>Title of the Story</CardSubtitle> */}
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Counter/>
          </CardBody>
      </Card>
      <Card body outline color="secondary">
          <CardTitle style= {{fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 25, textShadow: "2px 2px 4px black",}}>Author: InHisYouth</CardTitle>
        <CardImg top width="100%" src="https://media2.giphy.com/media/6T8wcUPfi8GDC/giphy.gif" alt="Card image cap" />
        <CardBody>
          {/* <CardSubtitle style={{fontFamily: "Payton One, sans-serif", color: "steelBlue", fontSize: 20, fontWeight: "bold",}}>Title of the Story</CardSubtitle> */}
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Counter/>   
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default CardStoryShare;