import React from "react";
// import "./Card.css";
import DeleteBtn from "./DeleteBtn";



const ProfileCard = props => (
  <div className="card-group">
	<div className="card text-center">
	  <img className="card-img-top" src="#" alt="Card image cap" rounded />
      <div className="card-body">
        {/* <h2>{props.heading}</h2> */}
      	{/* <div className="card-body">{props.children}</div> */}
	    <h5 className="card-title">Card title</h5>
	    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <div className="card-footer">
		/* <DeleteBtn /> */
	  </div>
	</div>
  </div>
);


export default ProfileCard;