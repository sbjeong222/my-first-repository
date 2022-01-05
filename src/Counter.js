import React, { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,
    };
    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>

                <button
                    onClick={() => {
                        // onClick을 통해 호출할 함수를 지정한다. 두코드는 같은 기능을 함.
                        // this.setState((prevState) => {
                        //     return { number: prevState.number + 1 };
                        // });
                        // this.setState((prevState) => ({
                        //     number: prevState.number + 1,
                        // }));
                        this.setState({ number: number + 1 }, () => {
                            console.log("setState가 호출되었습니다.");
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
