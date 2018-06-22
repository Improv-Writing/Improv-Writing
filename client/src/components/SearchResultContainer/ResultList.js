import React from "react";
import GifImage from "./GifImage";
import "./SearchResultContainer.css"
import Row from "../Row";


class ResultList extends React.Component {
    
    render(){
      let imgColumnOne = this.props.results.slice(0,(this.props.results.length/4));
      let imgColumnTwo = this.props.results.slice((this.props.results.length/4),((this.props.results.length/4)*2));
      let imgColumnThree =this.props.results.slice(((this.props.results.length/4)*2),((this.props.results.length/4)*3));
      let imgColumnFour = this.props.results.slice(((this.props.results.length/4)*3),((this.props.results.length/4)*4));
  return(
    <div>
    <Row>
    <div className='column'>
    {imgColumnOne.map(result => (
      <GifImage title={result.title} src={result.images.original.url} onImageClick={this.props.onImageClick}/>
    ))}
    </div>
    <div className='column'>
    {imgColumnTwo.map(result => (
      <GifImage title={result.title} src={result.images.original.url} onImageClick={this.props.onImageClick}/>
    ))}
    </div>
    <div className='column'>
    {imgColumnThree.map(result => (
      <GifImage title={result.title} src={result.images.original.url} onImageClick={this.props.onImageClick}/>
    ))}
    </div>
    <div className='column'>
    {imgColumnFour.map(result => (
      <GifImage title={result.title} src={result.images.original.url} onImageClick={this.props.onImageClick}/>
    ))}
    </div>
    </Row>
    </div>
  )};
};

export default ResultList;
