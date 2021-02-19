import React, { useState } from "react";

const Info = () => {
    const [name, setName] = useState("");
    const [nickName, setNickName] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>

            <div>이름 - {name}</div>
            <div>닉네임 - {nickName}</div>
        </div>
    );
};

export default Info;
