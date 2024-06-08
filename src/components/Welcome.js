import React, { Component } from "react";
class Welcome extends Component {
  render() {
    const { name, number } = this.props;
    // const {state1, state2} = this.state;
    return (
      <h4>
        Welcome {name}, number {number}
      </h4>
    );
  }
}

export default Welcome;
