import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcomne visitor",
    }; // state object
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing!", // accepts an object,
      //  nothing but the new state of the component
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
