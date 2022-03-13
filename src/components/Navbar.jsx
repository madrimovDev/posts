import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar bg-base-200'>
        <div className="flex-1">
            <Link to='' className='btn btn-ghost text-2xl'>Today Posts</Link>
        </div>
        <div className='flex-none'>
            <ul className="menu menu-horizontal items-center gap-4">
                <li className='p-0 bg-transparent'><NavLink className={({isActive}) => isActive ? 'text-primary  bg-none focus:bg-transparent hover:bg-transparent' : 'text-primary-content  bg-none'} to='/'>Home</NavLink></li>
                <li className='p-0 bg-transparent'><NavLink className={({isActive}) => isActive ? 'text-primary focus:bg-transparent hover:bg-transparent bg-none' : 'text-primary-content  bg-none'}  to='/posts'>Posts</NavLink></li>
            </ul>
        </div>
    </div>
  )
}
