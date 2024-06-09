import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log(this);
    this.setState({
      message: "goodbye!",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;
