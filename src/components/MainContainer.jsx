import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import MainSideBar from './MainSideBar'

const MainContainer = () => {
  return (
    <div className='w-full flex flex-row justify-between items-start'>
      <div className='w-1/12'>
        <MainSideBar/>
      </div>
      <div className='flex w-11/12 flex-col justify-start items-start'>
      <ButtonList/>
      <VideoContainer/>
      </div>
    </div>
  )
}

export default MainContainer
