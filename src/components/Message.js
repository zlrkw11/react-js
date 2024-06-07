import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcomne visitor",
    }; // state object
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
