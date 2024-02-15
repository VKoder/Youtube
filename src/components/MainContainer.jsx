import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import MainSideBar from "./MainSideBar";

const MainContainer = () => {
  return (
    <div className="w-full flex flex-row justify-between  items-start">
      <div className="md:block w-1/12 hidden  text-white bg-zinc-900  h-screen fixed left-0">
        <MainSideBar />
      </div>
      <div className="flex md:w-11/12 w-full md:pr-10 mx-5 md:ml-32 flex-col justify-start items-start">
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
