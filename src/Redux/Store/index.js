import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import customersReducers from "../Reducer/customersReducer";
import { combineReducers } from "redux"
import rootSaga from "../Saga"
import createSagaMiddleware from "@redux-saga/core";
import AuthReducer from "../Reducer/authReducer";


const saga = createSagaMiddleware()

const reducer = combineReducers({
    customersReducers : customersReducers,
})

const reducerAuth = combineReducers({
    AuthReducer : AuthReducer,
})

const store = configureStore({
    reducer,
    reducerAuth,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(saga)
})

saga.run(rootSaga)

export default store