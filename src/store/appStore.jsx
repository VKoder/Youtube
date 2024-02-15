import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import videoReducer from "./videoSlice"

const appStore = configureStore({
    reducer:{
        appSlice : appReducer,
        videoSlice : videoReducer,
    }
})
export default appStore;