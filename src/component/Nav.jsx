import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='navItem'><Link to='/' >Home</Link></div>
      <div className='navItem'><Link to='/About'  >About</Link></div>
      <div className='navItem'><Link to='/Post' >Post</Link></div>
    </nav>
  )
}

export default Nav