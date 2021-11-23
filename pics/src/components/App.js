import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  onSearchSubmit = (term) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
        },
        headers: {
          Authorization:
            "Client-ID pdBPytEHG4Qzq9jv_xJnXSYJmYKN8jYJhTnG1eHve14",
        },
      })
      .then((response) => {
        console.log(response.data.results);
      });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
