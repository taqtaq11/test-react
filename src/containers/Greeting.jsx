import React, {Component} from 'react';
import {connect} from "react-redux";
import GreetingWriter from "../components/GreetingWriter";
import GreetingReader from "../components/GreetingReader";
import NameReceiver from "../components/NameReceiver";
import setGreetingMessage from "../actions/setGreetingMessage";
import getName from "../actions/getName";

class Greeting extends Component {
    render() {
        const {message, a, b, name, messageUpdated, nameReceived} = this.props;

        let msg = message + a + b;

        return (
            <div>
                <GreetingReader defaultMessage={msg} messageUpdated={messageUpdated}/>
                <NameReceiver nameReceived={nameReceived}/>
                <GreetingWriter message={msg} name={name}/>
            </div>
        )
    }
}

const mapStateToProps = ({ greetingReducer: {message, a, b}, nameReceiverReducer: {name} }) => {
    return { message, name, a }
}

const mapDispatchToProps = (dispatch) => {
    return {
        messageUpdated: (ev) => dispatch(setGreetingMessage(ev.target.value)),
        nameReceived: (ev) => dispatch(getName())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)
