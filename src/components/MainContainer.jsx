import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import MainSideBar from "./MainSideBar";

const MainContainer = () => {
  return (
    <div className="w-full flex flex-row justify-between  items-start">
      <div className="w-1/12  text-white bg-zinc-900  h-screen fixed left-0">
        <MainSideBar />
      </div>
      <div className="flex w-11/12 pr-10 h-screen ml-32 flex-col justify-start items-start">
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
