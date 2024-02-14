import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';

const  Body = () => {

  const sideBar = useSelector(store => store.appSlice.sideBar)

  return (
    <div className='pt-16 w-12/12 flex flex-row' >
     
     {sideBar &&  <Sidebar/>}
    
      <MainContainer/>
    
    </div>
  )
}

export default Body;
