import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";


class GifImage extends React.Component {
  constructor(){
    super();
    this.passImageUp = this.passImageUp.bind(this);
  }

  passImageUp(){
    this.props.onImageClick(this);
    console.log("passImageUp fired");
  }

  render() {
    return (
      
        <Container fluid>
          <Row>
           <Col size="md-3">
        <button onClick={this.passImageUp}>
        <img 
          alt={this.props.title}
          className="img-fluid"
          src={this.props.src}
        />
        </button>
        </Col>
        </Row>
        </Container>
     
    );
  }
}

export default GifImage;
