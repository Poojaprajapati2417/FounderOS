import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout