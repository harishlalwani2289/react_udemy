import React from "react";
import reactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // This is the only time we do direct
  //   // assignment to state using this.state.
  //   this.state = { lat: null, err: null };
  // }

  state = { lat: null, err: "" };

  // React says we have to define render
  render() {
    if (this.state.lat && !this.state.err) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.err) {
      return <div>Error: {this.state.err}</div>;
    } else {
      return <Spinner />;
    }
  }

  // Lifecycle method.
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (er) => this.setState({ err: er.message })
    );
  }
}

reactDom.render(<App />, document.getElementById("root"));
