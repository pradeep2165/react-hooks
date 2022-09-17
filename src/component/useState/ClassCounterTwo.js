import React, { Component } from "react";

export class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  clickHandler = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounterTwo;
