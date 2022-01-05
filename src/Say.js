import React, { useState } from "react";

const Say = () => {
    //useState 선언
    const [message, setMessage] = useState("초기값"); // 클래스형 컴포넌트에서 state는 초기값으로 객체를 받앗지만 useState는 상관없음.
    const [color, setColor] = useState("black");

    //함수선언
    const onClickEnter = () => setMessage("안녕하세요!");
    const onClickLeave = () => setMessage("조심히가세요!");

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button onClick={() => setColor("red")}>빨강</button>
            <button onClick={() => setColor("blue")}>파랑</button>
            <button onClick={() => setColor("green")}>초록</button>
        </div>
    );
};

export default Say;
