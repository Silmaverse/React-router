import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'

const Navbar = () => {
  const navitems = [
    {
      content: 'Home',
      path:'/'
    },
    {
      content: 'About',
      path: '/about'
    }, {
      content: 'AllProduct',
      path: '/layouttwo'
    }, {
      content: 'Services',
      path: '/layouttwo/service'
    }
  ]
  return (
    <>
          <nav id='navbar' className='py-5 bg-[#D6A99D]'>
              <div className="container">
                  <div className="navRow flex justify-between items-center">
                      
                  <div className="icon w-[70px] ">
                          <img src={ logo} alt='logo' />
                  </div>
                  <div className="navitems">
                          <ul className='flex gap-5'>
                              {
                                navitems.map((item)=>{
                                  return <li className='text-lg  hover:text-white duration-100'><Link to={item.path}>{ item.content}</Link></li>
                                })
                              }
                              
                      </ul>
                  </div>
                  </div>
              </div>
          </nav>          
    </>
  )
}

export default Navbar