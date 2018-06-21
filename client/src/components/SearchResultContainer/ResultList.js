import React from "react";
import GifImage from "./GifImage";
import "./SearchResultContainer.css"
import Row from "../Row";


class ResultList extends React.Component {
    // constructor(props){
    //   super(props);
      
    //   // console.log(firstImgColumn);
    //   this.state={
    //     imagesPerColumn :numberPerColumn,
    //     firstImgsColumn: firstImgColumn,
    //   }
    // }
    
    // componentDidMount(){
      // console.log(this.props.results);
    // }
    
    render(){
      // const numberPerColumn =this.props.results.length/4;
      // const firstImgColumn= this.props.results.slice(0,numberPerColumn);
  return(
    <div>
    <Row>
    {this.props.results.map(result => (
      <GifImage title={result.title} src={result.images.original.url} onImageClick={this.props.onImageClick}/>

    ))}
    </Row>
    </div>
  )};
};

export default ResultList;
