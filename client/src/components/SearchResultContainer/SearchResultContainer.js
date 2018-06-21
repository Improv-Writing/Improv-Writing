import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../../utils/API";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./SearchResultContainer.css";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("kittens");
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (

      <div>
        <Container fluid>
        <Row>
          <Col size = "md-4">
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        </Col>
        </Row>

        <ResultList results={this.state.results} onImageClick={this.props.onImageClick} />

        </Container>
        
      </div>
      
    );
  }
}

export default SearchResultContainer;
