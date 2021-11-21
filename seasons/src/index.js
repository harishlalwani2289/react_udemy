import React from "react";
import reactDom from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // This is the only time we do direct
    // assignment to state using this.state.
    this.state = { lat: null, err: null };
  }

  // React says we have to define render
  render() {
    if (this.state.lat && !this.state.err) {
      return <div>Latitude : {this.state.lat}</div>;
    } else if (!this.state.lat && this.state.err) {
      return <div>Error: {this.state.err}</div>;
    } else {
      return <div>Loading...</div>;
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
