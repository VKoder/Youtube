import React, { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addVideo } from '../store/videoSlice'

const useYtVideos = () => {

    const dispatch = useDispatch()

    const fetchVideos= async()=>{
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
      
        dispatch(addVideo(json?.items))
    }

  useEffect(()=>{
    fetchVideos()
  },[])
}

export default useYtVideos
