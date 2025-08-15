import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import { Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import AllProduct from './pages/AllProduct'
import Services from './pages/Services'
import LayOutOne from './layouts/layoutOne'
import LayOutTwo from './layouts/LayOutTwo'


const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      {/* layoutone */}
      <Route path='/' element={<LayOutOne />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
      {/* LAYOUTTWO */}
      <Route path='/layouttwo' element={<LayOutTwo />}>
        <Route index element={<AllProduct />} />
        <Route path='/layouttwo/service' element={<Services />} />
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute}></RouterProvider>
    </>
  )
}

export default App