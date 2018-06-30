import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import WriteStory from "../../pages/WriteStory";
//https://media.giphy.com/media/3beK2mJs3MwIcragTR/giphy.gif


class Random extends React.Component{

	state = {
    results: []
  };

  	// constructor(){
  	// 	super();
  	// 	this.passImageUp= this.passImageUp.bind(this);
  	// }

  	// passImageUp(){
  	// 	this.props.onImageClick(this);
  	// 	console.log("passImageUp fired");
  	// }

	componentDidMount() {
    this.randomGiphy("kids random");
  	}

	  randomGiphy = query => {
	    API.search(query)
	      .then(res => this.setState({ results: res.data.data }))
	      .catch(err => console.log(err));
	  };
		render(){
			const imageUrl = this.state.results[6] ? this.state.results[6].images.original.url.replace("https://media2.giphy.com/media/", "") : "";
			return(
			<div>
				<Link to= {`/WriteStory/${imageUrl}`} className="nav-link">
					<button onClick={this.onImageClick}> 
					<img 
						alt= {this.props.title}
						src={this.state.results.length && this.state.results[6].images.original.url}  
						style= {{width: 200, webkitBoxShadow: "0 1px 20px 10px black"}}
						className= "img-fluid"
					/>

					</button>
				</Link>

			</div>

			)
		}
}
export default Random;
