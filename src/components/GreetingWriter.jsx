import React from "react";

const GreetingWriter = ({ message, name }) => {
    return (
        <div>{message}, {name}</div>
    );
}

export default GreetingWriter;