import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoSlice",
  initialState: {
    videos: null,
    videoInfo:null,
    videoComment:null,
  },
  reducers: {
    addVideo: (state, action) => {
      state.videos = action.payload;
    },
    addVideoInfo:(state, action)=>{
      state.videoInfo = action.payload;
    },
    addVideoComment:(state, action)=>{
      state.videoComment = action.payload;
    },
  },
});
export default videoSlice.reducer;
export const { addVideo, addVideoInfo, addVideoComment } = videoSlice.actions;
