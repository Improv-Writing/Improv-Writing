import React from "react";

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
      <div>
        <button onClick={this.passImageUp}>
        <img
          alt={this.props.title}
          className="img-fluid"
          src={this.props.src}
        />
        </button>
      </div>
    );
  }
}

export default GifImage;
