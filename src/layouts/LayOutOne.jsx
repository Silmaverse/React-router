import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const LayOutOne = () => {
  return (
      <>
          <Navbar />
          <Outlet/>
      </>
  )
}

export default LayOutOne