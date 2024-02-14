import React from "react";

const Sidebar = () => {
  const spanCss = "text-base font-semibold";
  return (
    <div className="w-2/12 fixed left-0 bg-white h-screen overflow-y-scroll text-black flex flex-col justify-start items-start pt-4 px-2 z-20">
      <div className="pb-2 border-b border-gray-400 w-full">
        <ul>
          <li className="pb-2">
            <i className="ri-home-4-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-music-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-newspaper-line px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
        </ul>
      </div>
      <div className="py-2 border-b border-gray-400 w-full">
        <span className="px-4  font-bold   text-lg ">Explore</span>
        <ul className="pt-2">
          <li className="pb-2">
            <i className="ri-home-4-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-music-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-newspaper-line px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-home-4-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-music-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-newspaper-line px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-home-4-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-music-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-newspaper-line px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-home-4-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-music-fill px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
          <li className="pb-2">
            <i className="ri-newspaper-line px-4 text-xl"></i>
            <span className={spanCss}>Home</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
