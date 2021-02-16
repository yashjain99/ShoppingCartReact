import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "../Pages/HomePage/Redux/homeReducer";

const rootReducer = combineReducers({
    home: homeReducer
})


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, createComposer(applyMiddleware(thunk)))