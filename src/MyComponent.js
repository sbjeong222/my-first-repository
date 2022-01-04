import React from "react";

const MyComponent = (props) => {
    return (
        <div>
            나의 새로운 이름은 : {props.name} 입니다.
            <br />
            children 값은 {props.children}
        </div>
    );
};

//MyComponent.defaultProps 는 props가 없을때 기본적으로 보여줄 값을 설정함.
MyComponent.defaultProps = {
    name: "기본이름",
};

export default MyComponent;
