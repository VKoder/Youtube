import  { useEffect } from 'react'
import { GOOGLE_API_KEY, VIDEO_COMMENT } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addVideoComment } from '../store/videoSlice'


const useVideoComments = (id) => {

    const dispatch = useDispatch()

    const fetchVideos= async()=>{
        const data = await fetch(VIDEO_COMMENT + id + '&key=' + GOOGLE_API_KEY )
        const json = await data.json()
        dispatch(addVideoComment(json?.items))
        // console.log(json)
    }

  useEffect(()=>{
    fetchVideos()
  },[])
}

export default useVideoComments;
