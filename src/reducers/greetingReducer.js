import {type as setGreetingMessage} from "../actions/setGreetingMessage";

const initialState = {
    message: "Hello ",
    answers: ["aaa", "bbb"],
    a: "aaaa",
    b: "bbbb"
};

export default function greetingReducer(state = initialState, {type, message}) {
    if (type === setGreetingMessage) {
        return { message };
    }

    return state;
}