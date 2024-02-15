import React from 'react'
import VideoCards from './VideoCards'
import useYtVideos from '../custom hooks/useYtVideos'
import { useSelector } from 'react-redux'

const VideoContainer = () => {

  useYtVideos()
  const videos = useSelector(store => store.videoSlice.videos)
  if (!videos) {
    return console.log("coming soon")
  }
  console.log(videos)
  return (
    <div className='w-full justify-between flex-wrap  items-start flex flex-row mt-16 mr-10'>
      { 
      videos.map(info =>   <VideoCards key={info?.id} info={info}/>)
      }

    </div>
  )
}

export default VideoContainer
