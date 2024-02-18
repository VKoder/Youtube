import React from 'react'
import VideoCards from './VideoCards'
import useYtVideos from '../custom hooks/useYtVideos'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  useYtVideos()
  const videos = useSelector(store => store.videoSlice.videos)
  if (!videos) {
    return console.log("coming soon")
  }
  return (
    <div className='w-full justify-between flex-wrap  items-start flex flex-row mt-16 mr-10'>
      { 
      videos.map(info =>   <Link to={"/watch?v=" + info?.id} key={info?.id}><VideoCards  info={info}/></Link>)
      }

    </div>
  )
}

export default VideoContainer
