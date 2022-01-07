import React, { useState } from "react";

const EventPractice = () => {
    const [userName, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangeMessgae = (e) => setMessage(e.target.value);
    const onClick = () => {
        alert(userName + ": " + message);
        setUsername("");
        setMessage("");
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="userName"
                placeholder="아무거나 입력하세요."
                value={userName}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력하세요."
                value={message}
                onChange={onChangeMessgae}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
