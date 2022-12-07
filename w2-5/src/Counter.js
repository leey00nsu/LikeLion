import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값 :{fixedNumber}</h1>
        <button
          onClick={() => {
            //this.setState -> state에 새로운 값 넣어줌.
            this.setState({ number: number + 1 }, () => {
              console.log("setState 호출");
            });
          }}
        >
          +1
        </button>
        <br />
      </div>
    );
  }
}

export default Counter;
