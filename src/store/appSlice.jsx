import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'appSlice',
    initialState:{
        sideBar: false,
    },
    reducers:{
        addSideBar:(state, action)=>{
            state.sideBar = !state.sideBar;
        }
    }
})
export default appSlice.reducer;
export const {addSideBar} = appSlice.actions;