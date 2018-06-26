import React from "react";
import API from "../../utils/API";


class Random extends React.Component{

	state = {
    results: []
  };

  	constructor(){
  		super();
  		this.passImageUp= this.passImageUp.bind(this);
  	}

  	passImageUp(){
  		this.props.onImageClick(this);
  		console.log("passImageUp fired");
  	}

	componentDidMount() {
    this.randomGiphy("kids random");
  }

  randomGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };
	render(){
		return(
		<div>
			<button onClick={this.passImageUp}> 
				<img 
					alt= {this.props.title}
					src={this.state.results.length && this.state.results[6].images.original.url}  
					style= {{width: 200,}}
					className= "img-fluid"
				/>
				 
				
			</button>

		</div>

		)
	}
}
export default Random;
