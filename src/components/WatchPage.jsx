import React from "react";
import { useSearchParams } from "react-router-dom";

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
        <div className="w-full flex flex-col justify-start items-center py-2">
          <div><span className="text-xl  text-white font-bold">Full Song: Woh Din Film Version | Chhichhore | Sushant,Shraddha | Pritam | Amitabh | Tushar Joshi</span></div>
          <div className="w-full flex flex-row justify-between  py-2 ">
            <div className="w-6/12 flex gap-3 flex-row justify-start items-center">
              <img className="w-11 rounded-full" alt="logo" src="https://yt3.ggpht.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s88-c-k-c0x00ffffff-no-rj"></img>
              <div className="flex w-3/12 flex-col justify-start items-start gap-0">
              <span className="text-base font-bold text-white">Tseroies</span>
              <span className="text-xs font-medium text-gray-400">400k subs</span>
              </div>
              <button className="bg-white px-3 font-bold cursor-pointer text-sm py-1.5 rounded-full">Subscribe</button>
            </div>
            <div className="w-6/12 text-white justify-start items-center gap-2 flex flex-row ">
              <div className="flex flex-row w-5/12 bg-zinc-700 py-1 px-5 rounded-full justify-between  items-center">
                <div className="border-r border-gray-400">
                <span><i class="ri-thumb-up-line text-lg cursor-pointer"></i></span>
                <span className="pl-2 pr-5 text-sm font-medium">44K</span>
                </div>
                <span>
                <i class="ri-thumb-down-line text-lg"></i>
                </span>
              </div>
              <div className="flex flex-row justify-center gap-1 rounded-full items-center w-4/12 bg-zinc-700 py-1 px-5">
              <i class="ri-share-forward-line text-lg"></i>
                  <span className="text-base font-semibold cursor-pointer">Share</span>
              </div>
              <div className="w-[12%] rounded-full bg-zinc-700 py-1"><i class="cursor-pointer ri-more-fill text-lg flex justify-center items-center"></i></div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-full bg-zinc-700 text-white h-30 flex flex-col px-3 py-3 justify-start items-start rounded-xl">
          <div className="flex flex-row text-base gap-2 font-bold">
            <span>300M views</span>
            <span>12 years ago</span>
          </div>
          <div>
            <span className="text-sm font-semibold">Rockstar whole album is super fantastic but one track that simply class apart is "Kun Faya Kun". In this movie, Ranbir Kapoor has shed his boy next door image and we believe this is his best work done so far. This song is sung by Mohit Chauhan, Javed Ali, A R Rahman whereas l</span>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="h-full w-4/12">bye</div>
    </div>
  );
};

export default WatchPage;
