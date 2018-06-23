import React from "react";
import API from "../../utils/API";


class Random extends React.Component{

	state = {
    results: []
  };

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
			<img src={this.state.results.length && this.state.results[6].images.original.url}  style= {{width: 200,}} />
		</div>
		)
	}
}
export default Random;
