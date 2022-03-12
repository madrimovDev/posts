import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar bg-base-200'>
        <div className="flex-1">
            <Link to='' className='btn btn-ghost text-2xl'>Today Posts</Link>
        </div>
        <div className='flex-none'>
            <ul className="menu menu-horizontal">
                <li><NavLink className="p-1 rounded-md text-xl self-center" to='/'>Home</NavLink></li>
                <li><NavLink className="p-1 rounded-md text-xl self-center" to='/posts'>Posts</NavLink></li>
            </ul>
        </div>
    </div>
  )
}
