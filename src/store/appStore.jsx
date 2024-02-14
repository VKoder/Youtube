import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"

const appStore = configureStore({
    reducer:{
        appSlice : appReducer,
    }
})
export default appStore;