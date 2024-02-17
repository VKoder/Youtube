import React from "react";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import VideoInfo from "./VideoInfo";

const WatchPage = () => {
  const [letSearch] = useSearchParams();
  const params = letSearch.get("v");

  return (
    <div className="flex flex-row justify-between px-28 gap-8  items-start w-full py-2">
      <div className=" w-8/12 h-full">
        <div className="w-full h-[350px] rounded-2xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/" + params}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <VideoInfo />

        <div className="flex w-full pt-8 flex-col">
          <div className="text-white flex flex-row justify-start items-center gap-16">
            <span className="text-xl font-bold">102,762 Comments</span>
            <span className="text-base font-semibold">
              <i class="ri-sort-desc pr-3"></i>Sort By
            </span>
          </div>
          <div className=" w-full  mt-8  rounded-xl">
            <Comment />
          </div>
        </div>
      </div>
      <div className="h-full w-4/12">live chat and recommended</div>
    </div>
  );
};

export default WatchPage;
