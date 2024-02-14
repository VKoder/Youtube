import React from "react";

const MainSideBar = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-6">
      <ul>
        <li className="flex flex-col justify-center items-center pb-8">
          <i className="ri-newspaper-line px-4 text-xl"></i>
          <span className="text-xs">Home</span>
        </li>
        <li className="flex flex-col justify-center items-center pb-8">
          <i className="ri-newspaper-line px-4 text-xl"></i>
          <span className="text-xs">Shorts</span>
        </li>
        <li className="flex flex-col justify-center items-center pb-8">
          <i className="ri-newspaper-line px-4 text-xl"></i>
          <span className="text-xs">Subscriptions</span>
        </li>
        <li className="flex flex-col justify-center items-center pb-8">
          <i className="ri-newspaper-line px-4 text-xl"></i>
          <span className="text-xs">You</span>
        </li>
      </ul>
    </div>
  );
};

export default MainSideBar;
