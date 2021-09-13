import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducers } from "./feautures"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from "redux-logger/src";

const logger = createLogger({
    diff: true,
    collapsed: true
});

export default createStore (
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(thunk, logger))
);

