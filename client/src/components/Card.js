import React from "react";
// import "./Card.css";


const Card = props => (
  <div className="card text-center">
    <div className="card-header">
      {/* <h2>{props.heading}</h2> */}
      <h2>Hello from Card!</h2>
    </div>
    {/* <div className="card-body">{props.children}</div> */}
  </div>
);

export default Card;