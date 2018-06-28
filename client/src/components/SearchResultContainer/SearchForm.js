import React from "react";
import "./SearchResultContainer.css";


const SearchForm = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search" style= {{paddingTop: 20, paddingBottom: 10, fontFamily: "Paytone One, sans-serif", color: "steelBlue", fontSize: 30, textShadow: "2px 2px 6px black",}}>Choose your image:</label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a Gif"
        style={{fontFamily: "Gloria Hallelujah, cursive", fontSize: 20,}}
        id="search"
      />
      <button
        onClick={props.handleFormSubmit}
        className="btn"
        style= {{marginTop: 10, marginBottom: 20, backgroundColor: "blue", color: "white", padding: 10, fontSize: 20, fontWeight: "bold", boxShadow: "10px 10px 20px grey",}}
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
