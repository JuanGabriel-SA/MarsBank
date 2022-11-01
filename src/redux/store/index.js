import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import UsersReducer from "../reducers/Users.reducer";

const rootReducer = combineReducers({
    users: UsersReducer,
})

const store = configureStore({reducer: rootReducer});

export default store;