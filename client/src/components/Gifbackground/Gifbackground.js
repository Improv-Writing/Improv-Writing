import React from "react";
import "./Gifbackground.css";

const Gifbackground = props => (
  <div className="gifbackground text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default Gifbackground;