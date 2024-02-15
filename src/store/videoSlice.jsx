import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'videoSlice',
    initialState:{
        videos:null,
    },
    reducers:{
        addVideo :(state, action)=>{
            state.videos = action.payload;
        }
    }
})
export default videoSlice.reducer
export const {addVideo} = videoSlice.actions