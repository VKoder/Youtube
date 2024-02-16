import React from 'react'
import { useDispatch } from 'react-redux'
import { addplayVideo } from '../store/videoSlice'

const useVideoApi = (params) => {

    const dispatch = useDispatch()

    const play =

     dispatch(addplayVideo(play))

}

export default useVideoApi
