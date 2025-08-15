import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

const LayOutTwo = () => {
  return (
      <>
          <Navbar />
           <div className='flex'>
        
              <SideBar/>
              <Outlet/>
           </div>
          
      </>
  )
}

export default LayOutTwo