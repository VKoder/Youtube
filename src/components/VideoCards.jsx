import React from 'react'

const VideoCards = ({info}) => {

  const {snippet, statistics} = info;
  const {thumbnails, title, channelTitle, publishedAt} = snippet
  // const monthsAgo = Math.floor((new Date() - new Date(publishedAt)) / (1000 * 60 * 60 * 24 * 30)) + " months ago";

  return (
    <div className='flex flex-col w-[350px] pb-10 cursor-pointer'>
      <div className=''>
        <img className='rounded-md' alt='pic' src={thumbnails?.maxres?.url || thumbnails?.medium?.url}></img>
      </div>
      <div className='flex pt-3 gap-2 flex-row justify-start items-start'>
      <div>
        <img className='w-9 rounded-full' src='https://yt3.ggpht.com/1vX1mZYVJJcNlU_X1jwHJYqelk9Q1Z4u65wYDlhDwsRrwlg601-Wuql_DSYO_Ogkt86DA8WU=s68-c-k-c0x00ffffff-no-rj' alt='profile'/>
      </div>
      <div className='flex flex-col'>
        <span className='font-bold text-base text-white'>{title?.length > 65 ? `${title.slice(0,65)}...` : title}</span>
        <span className='text-zinc-300 text-sm font-semibold'>{channelTitle}</span>
        <div className='flex flex-row gap-4 justify-start items-start text-zinc-300'>
          <span className='text-sm font-normal'>{statistics?.viewCount}views</span>
          <span className='text-sm font-normal'></span>
      
        </div>
      </div>
      </div>
    </div>
  )
}

export default VideoCards
