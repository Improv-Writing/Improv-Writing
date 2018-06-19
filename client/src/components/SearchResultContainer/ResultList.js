import React from "react";

class ResultList extends React.Component {
  render(){
  return(
  <ul className="list-group">
    {this.props.results.map(result => (
      <li className="list-group-item" key={result.id}>
      <button onClick={this.props.onImageClick}>
        <img
          alt={result.title}
          className="img-fluid"
          src={result.images.original.url}
        />
        </button>
      </li>
    ))}
  </ul>
  )};
};

export default ResultList;
