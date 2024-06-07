import React, { Component } from "react";
class Welcome extends Component {
  render() {
    return (
      <h4>
        Welcome {this.props.name}, number {this.props.number}
      </h4>
    );
  }
}

export default Welcome;
