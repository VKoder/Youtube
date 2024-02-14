import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const  Body = () => {
  return (
    <div className='pt-16 w-12/12 flex flex-row' >
     
      <Sidebar/>
    
      <MainContainer/>
    
    </div>
  )
}

export default Body;
