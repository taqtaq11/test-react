import {combineReducers} from "redux"
import {routerReducer as router} from "react-router-redux"
import greetingReducer from "./greetingReducer"
import nameReceiverReducer from "./nameReceiverReducer"

const rootReducer = combineReducers({
    router,
    greetingReducer,
    nameReceiverReducer
})

export default rootReducer