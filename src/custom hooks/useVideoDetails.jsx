import  { useEffect } from 'react'
import { GOOGLE_API_KEY, VIDEO_DETAILS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {  addVideoInfo } from '../store/videoSlice'

const useVideoDetails = (id) => {

    const dispatch = useDispatch()

    const fetchVideos= async()=>{
        const data = await fetch(VIDEO_DETAILS + id + '&key=' + GOOGLE_API_KEY )
        const json = await data.json()
        dispatch(addVideoInfo(json?.items?.[0]))
    }

  useEffect(()=>{
    fetchVideos()
  },[])
}

export default useVideoDetails;
