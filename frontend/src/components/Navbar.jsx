import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className='bg-slate-900 py-4 flex sticky top-0 items-center justify-between px-4'>
        <h1 className='text-blue-600 font-semibold text-4xl'>FounderOS</h1>
        <ul className='flex justify-between text-blue-600 font-medium gap-4 items-center'>
        <li> <Link to="/dashboard"> Dashboard</Link></li>
        <li> <Link to="/taskboard">Task Board</Link></li>
        <li><Link to="/finance">Finance</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className='flex justify-between text-blue-600 font-medium gap-4 items-center'>
          <Link to="/login">Login</Link>
        </div>
    </div>
  )
}

export default Navbar