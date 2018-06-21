import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./SearchResultContainer.css";


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
        // <div className="column">
        <Col size="md-3">
        <button onClick={this.passImageUp}>
        <img 
          alt={this.props.title}
          className="img-fluid"
          src={this.props.src}
        />
        </button>
        </Col>
        // </div>
     
    );
  }
}

export default GifImage;
