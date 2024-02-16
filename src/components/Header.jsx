import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSideBar } from "../store/appSlice";

const Header = () => {
  const [showSearch, setshowSearch] = useState(true);
  const dispatch = useDispatch();

  const handleSearch = () => {
    setshowSearch(!showSearch);
  };

  const handleSideToggle = () => {
    dispatch(addSideBar());
  };

  return (
    <div className="flex flex-row justify-between items-center w-full fixed top-0 bg-zinc-900 text-white py-1.5 px-3 md:py-4 md:px-10">
      {showSearch && (
        <div className="w-3/12 md:w-2/12 flex justify-start items-center gap-4 flex-row ">
          <i
            className="hidden md:block text-xl ri-menu-fill hover:opacity-40 cursor-pointer "
            onClick={handleSideToggle}
          ></i>
          <img
            className="sm:w-32 w-60 md:w-24 h-5"
            src="https://imgs.search.brave.com/XHxHwtmvjGyrE7iUyyQkJs37xSdxIvttt6e5JbK6SsE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NjUwMTQx/NXlvdXR1YmUtcG5n/LWxvZ28ucG5n"
            alt="logo"
          ></img>
        </div>
      )}

      <div className="w-6/12">
        <div className="w-full hidden md:flex relative items-center justify-center text-white bg-zinc-900">
          <input
            className="w-full bg-zinc-900 text-white border-gray-600 border text-base pl-4 py-1.5 rounded-full"
            type="text"
            placeholder="Search"
          ></input>
          <button className="absolute right-0  px-4">
            <i className="text-xl  ri-search-line"></i>
          </button>
        </div>
      </div>

      {!showSearch && (
        <div onClick={handleSearch} className="cursor-pointer">
          <i className="text-xl ri-arrow-left-line"></i>
        </div>
      )}

      <div className="w-2/12 flex justify-end flex-row gap-5 items-center">
        {showSearch && (
          <div className="w-2/12 md:hidden" onClick={handleSearch}>
            <button className="">
              <i className="text-lg md:text-xl  ri-search-line"></i>
            </button>
          </div>
        )}
        <i className="text-xl md:text-2xl ri-user-fill"></i>
      </div>
    </div>
  );
};

export default Header;
