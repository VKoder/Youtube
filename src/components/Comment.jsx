import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Comment = () => {
    const videoComment = useSelector(store => store.videoSlice.videoComment)

    const [reply, setreply] = useState(false);
    const handleReply =()=>{
        setreply(!reply);
    }


    if (!videoComment) {
        return console.log("comment is coming soon")
    }
    // const comment = ;
    console.log(videoComment[9])

    



  return (
    <>
    {
    videoComment?.map((comm) => 
    <div className="w-full flex flex-row gap-2 justify-start items-start py-2">
              <div className='w-1/12'>
                <img alt="logo" className=" w-12 rounded-full" src={comm?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}></img>
              </div>
              <div className="flex flex-col justify-start w-10/12 items-start">
                <div className="flex flex-row justify-start pb-1 gap-2 items-center">
                  <span className="font-bold text-white text-sm">{comm?.snippet?.topLevelComment?.snippet?.authorDisplayName}</span>
                  <span className="font-medium text-zinc-300 text-xs">12 days ago</span>
                </div>
                <span className="font-medium text-sm text-white">{comm?.snippet?.topLevelComment?.snippet?.textDisplay}</span>
                <div className="pt-1.5 flex flex-row justify-start items-center  gap-6">
                  <div>
                  <i class="ri-thumb-up-line text-lg cursor-pointer text-white"></i>{comm?.snippet?.topLevelComment?.snippet?.likeCount !== 0 && <span className="pl-1.5 text-sm text-zinc-300">{comm?.snippet?.topLevelComment?.snippet?.likeCount}</span>}
                  </div>
                  <i class="ri-thumb-down-line text-lg text-white"></i>
                  <span className="text-xs pl-3 font-bold text-white">Reply</span>
                </div>
                {comm?.replies?.comments && <div className="cursor-pointer  flex flex-row justify-center py-1 gap-1 hover:rounded-full text-blue-400 hover:px-2 hover:bg-blue-500 hover:bg-opacity-20 px-1 hover:py-1 items-center" onClick={handleReply}>
                <i class="ri-arrow-down-s-fill text-xl"></i>
                <span className="text-sm font-bold">{comm?.replies?.comments?.length} replies</span>
                </div>}
                {reply && comm?.replies?.comments?.map(nest => console.log(nest))}
              </div>
    </div>
    )}
    </>
  )
}

export default Comment
