import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
    static defaultProps = {
        //class 내부에서 defaultProps와 propTypes를 설정할여 협업 시 개발 능률을 올릴 수 있음.
        name: "기본이름",
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };
    render() {
        const { name, children, favoriteNumber } = this.props;
        return (
            <div>
                나의 새로운 이름은 : {name} 입니다.
                <br />
                children 값은 : {children} 입니다.
                <br />
                제가 좋아하는 숫자는 : {favoriteNumber} 입니다.
            </div>
        );
    }
}

export default MyComponent;
