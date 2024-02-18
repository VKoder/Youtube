import React, { useState } from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const VideoInfo = () => {
  const [desc, setdesc] = useState(false);

  const info = useSelector((store) => store.videoSlice.videoInfo);
  if (!info) {
    return console.log("Video info is comin show shimmer here");
  }
  console.log(info);

  const { snippet, statistics } = info;
  const { title, channelTitle, description, publishedAt } = snippet;
  const { commentCount, likeCount, viewCount } = statistics;

  const toggleDescription = () => {
    setdesc(!desc);
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-start items-start py-2">
        <div>
          <span className="text-xl py-2 text-white font-bold">{title}</span>
        </div>
        <div className="w-full flex flex-row justify-between  py-2 ">
          <div className="w-6/12 flex gap-3 flex-row justify-start items-center">
            <img
              className="w-11 rounded-full"
              alt="logo"
              src="https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s88-c-k-c0x00ffffff-no-rj"
            ></img>
            <div className="flex w-4/12 flex-col justify-start items-start gap-0">
              <span className="text-base font-bold text-white">
                {channelTitle}
              </span>
              <span className="text-xs font-medium text-gray-400">
                400k subs
              </span>
            </div>
            <button className="bg-white px-3 font-bold cursor-pointer text-sm py-1.5 rounded-full">
              Subscribe
            </button>
          </div>
          <div className="w-6/12 text-white justify-start items-center gap-2 flex flex-row ">
            <div className="flex flex-row w-5/12 bg-zinc-700 py-1 px-5 rounded-full justify-between  items-center">
              <div className="border-r border-gray-400">
                <span>
                  <i class="ri-thumb-up-line text-lg cursor-pointer"></i>
                </span>
                <span className="pl-2 pr-5 text-sm font-medium">
                  {likeCount}
                </span>
              </div>
              <span>
                <i class="ri-thumb-down-line text-lg"></i>
              </span>
            </div>
            <div className="flex flex-row justify-center gap-1 rounded-full items-center w-4/12 bg-zinc-700 py-1 px-5">
              <i class="ri-share-forward-line text-lg"></i>
              <span className="text-base font-semibold cursor-pointer">
                Share
              </span>
            </div>
            <div className="w-[12%] rounded-full bg-zinc-700 py-1">
              <i class="cursor-pointer ri-more-fill text-lg flex justify-center items-center"></i>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full bg-zinc-700 text-white h-30 flex flex-col px-3 py-3 justify-start items-start rounded-xl">
        <div className="flex flex-row text-base gap-2 font-bold">
          <span>{viewCount}</span>
          <span>{publishedAt}</span>
        </div>
        {!desc && <div>
          <span
            className="text-sm font-semibold cursor-pointer"
            onClick={toggleDescription}
          >
            {description.length > 260
              ? `${description.slice(0, 260)}...show more`
              : description}
          </span> 
        </div> }
        {desc &&
         <div>
          <span
            className="text-sm font-semibold cursor-pointer"
            onClick={toggleDescription}
          >
            {`${description}...show less`}
          </span> 
         </div> 
        }
      </div>
      <div className="flex w-full pt-8 flex-col">
        <div className="text-white flex flex-row justify-start items-center gap-16">
          <span className="text-xl font-bold">{commentCount} Comments</span>
          <span className="text-base font-semibold">
            <i class="ri-sort-desc pr-3"></i>Sort By
          </span>
        </div>
        <div className=" w-full  mt-8  rounded-xl">
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
