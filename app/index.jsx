import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import getRoutes from "config/routes"
import * as reducers from "modules"

// const reducerArray = [...reducers, sematable]
const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}>{getRoutes()}</Provider>, document.getElementById("app"))
