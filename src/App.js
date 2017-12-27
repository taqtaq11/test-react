import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, ConnectedRouter} from "react-router-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import routes from "./routes";
import LayoutContainer from "./containers/LayoutContainer";

const history = createHistory();
const store = configureStore(history);

function configureStore(history) {
    const router = routerMiddleware(history);
    return createStore(rootReducer, applyMiddleware(thunk, router));
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <LayoutContainer>{routes}</LayoutContainer>
            </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;
