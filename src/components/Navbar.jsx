import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'

const Navbar = () => {
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
                 <li className='text-lg  hover:text-white duration-100'><Link to='/'>Home</Link></li>
                 <li className='text-lg  hover:text-white duration-100'><Link to='/about'>About</Link></li>
                <li className='text-lg hover:text-white duration-100'><Link to='/layouttwo'>AllProducts</Link></li>
                <li className='text-lg hover:text-white duration-100'><Link to='/layouttwo/service'>Services</Link></li>
                              
                      </ul>
                  </div>
                  </div>
              </div>
          </nav>          
    </>
  )
}

export default Navbar