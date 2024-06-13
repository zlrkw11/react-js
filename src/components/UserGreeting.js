import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    /*     let message; 
    if (this.state.isLoggedIn) {
      message = <div>Welcome ZLRKW11</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>; 

    if (this.state.isLoggedIn) {
      return <div>Welcome ZLRKW11</div>;
    } else {
    }
    return (
      <div>
        <div>Welcome Guest</div>
      </div>
    );
  } 
    return this.state.isLoggedIn ? (
      <div>Welcome ZLRKW11</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
    */
    return this.state.isLoggedIn && <div>Welcome ZLRKW11</div>;
  }
}
export default UserGreeting;
