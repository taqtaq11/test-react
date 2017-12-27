import React from "react";

const GreetingReader = ({ defaultMessage, messageUpdated }) => {
    return (
      <input onChange={messageUpdated} value={defaultMessage}/>
    )
}

export default GreetingReader