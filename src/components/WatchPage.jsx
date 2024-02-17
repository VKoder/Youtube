import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import useVideoDetails from "../custom hooks/useVideoDetails";
import useVideoComments from "../custom hooks/useVideoComments";

const WatchPage = () => {
  const [letSearch] = useSearchParams();
  const params = letSearch.get("v");
  useVideoDetails(params)
  useVideoComments(params)

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

       
      </div>
      <div className="h-full w-4/12">live chat and recommended</div>
    </div>
  );
};

export default WatchPage;
