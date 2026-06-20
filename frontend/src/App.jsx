import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Taskboard from './pages/Taskboard'
import Layout from './pages/Layout'
import Contact from './pages/Contact'
import Finance from './pages/Finance'
import Login from './pages/AuthPages/Login'
import Register from './pages/AuthPages/Register'
import { Route, Routes } from 'react-router'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/taskboard' element={<Taskboard />} />
        <Route path='/finance' element={<Finance />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
