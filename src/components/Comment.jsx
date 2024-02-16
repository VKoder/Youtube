import React from 'react'

const Comment = () => {
  return (
    <div className="w-full flex flex-row gap-4 justify-start items-start py-2">
              <div>
                <img alt="logo" className="w-12 rounded-full" src="https://yt3.ggpht.com/r5dhuDudeOJD8SKUzfPJSSgDMlugg4dA6AEzjGBLUToJ6gwtqol3BLrsp2zqfK50WZCTQAJ4PQ=s88-c-k-c0x00ffffff-no-rj"></img>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="flex flex-row justify-start pb-1 gap-2 items-center">
                  <span className="font-bold text-white text-sm">@vivek</span>
                  <span className="font-medium text-zinc-300 text-xs">12 days ago</span>
                </div>
                <span className="font-medium text-sm text-white">February 2024 anyone ?</span>
                <div className="pt-1.5 flex flex-row justify-start items-center  gap-6">
                  <div>
                  <i class="ri-thumb-up-line text-lg cursor-pointer text-white"></i><span className="pl-1.5 text-sm text-zinc-300">8</span>
                  </div>
                  <i class="ri-thumb-down-line text-lg text-white"></i>
                  <span className="text-xs pl-3 font-bold text-white">Reply</span>
                </div>
                <div className="flex flex-row justify-center py-1 gap-1 hover:rounded-full text-blue-400 hover:px-2 hover:bg-blue-500 hover:bg-opacity-20 px-1 hover:py-1 items-center">
                <i class="ri-arrow-down-s-fill text-xl"></i>
                <span className="text-sm font-bold">24 replies</span>
                </div>
              </div>
            </div>
  )
}

export default Comment
