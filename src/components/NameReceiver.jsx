import React from "react";

const NameReceiver = ({ nameReceived }) => {
    return (
        <button onClick={nameReceived}>Get name</button>
    )
}

export default NameReceiver