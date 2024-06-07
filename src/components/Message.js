import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
        message: 'Welcomne visitor'
    };    // state object

  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Message;
