import React from 'react'

const VideoCards = () => {
  return (
    <div className='flex flex-col w-[350px] pb-10'>
      <div className=''>
        <img className='rounded-md' alt='pic' src='https://imgs.search.brave.com/xxxyiqSdvak7OYUOU-vDwgpIMlDyujAJ0inQJRa4N0g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3lvdXR1YmUt/dGh1bWJuYWlsL3Rl/bXBsYXRlXzAuanBn'></img>
      </div>
      <div className='flex pt-3 gap-2 flex-row justify-start items-start'>
      <div>
        <img className='w-9 rounded-full' src='https://yt3.ggpht.com/1vX1mZYVJJcNlU_X1jwHJYqelk9Q1Z4u65wYDlhDwsRrwlg601-Wuql_DSYO_Ogkt86DA8WU=s68-c-k-c0x00ffffff-no-rj' alt='profile'/>
      </div>
      <div className='flex flex-col'>
        <span className='font-bold text-base text-white'>Joker Amit Badana</span>
        <span className='text-zinc-300 text-sm font-semibold'>Hitesh Choudhary</span>
        <div className='flex flex-row gap-4 justify-start items-start text-zinc-300'>
          <span className='text-sm font-normal'>400K views</span>
          <span className='text-sm font-normal'>4 months ago</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default VideoCards
