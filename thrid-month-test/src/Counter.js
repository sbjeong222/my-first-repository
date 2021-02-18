import { render } from "@testing-library/react";
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
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick={() => {
          //   this.setState({ number: number + 1 });
          // this.setState({ number: this.state.number + 1 }); 두개 있다고 두번 올라가지 않음.
          // this.setState((prevState) => ({ number: prevState.number + 1 })); 밑의 코드와 같음 함수를 () 감싸면 즉시 실행된다.

          //이해못한코드
          // this.setState((prevState) => {
          //   return { number: prevState.number + 1 };
          // })

          //}}

          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출되었습니다.");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
