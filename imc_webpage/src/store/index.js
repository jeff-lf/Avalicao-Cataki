import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import thunk from 'redux-thunk'

import { imcReducer } from "./modules/imc/reducer";

const reducers = combineReducers({imc: imcReducer})

const store = createStore(reducers, applyMiddleware(thunk))

export default store