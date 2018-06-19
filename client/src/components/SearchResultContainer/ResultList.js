import React from "react";
import GifImage from "./GifImage";

class ResultList extends React.Component {  

  render(){
  return(
    <div>
    {this.props.results.map(result => (
      <div>
      <GifImage title={result.title} src={result.images.original.url} onImageClick={this.props.onImageClick}/>
      </div>
    ))}
    </div>
  )};
};

export default ResultList;
