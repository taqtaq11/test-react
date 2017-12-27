import {type as setName} from "../actions/setName"

const initialState = {
    name: "Denis"
}

export default function nameReceiverReducer(state = initialState, {type, name}) {
    if (type === setName) {
        return { name }
    }

    return state
}