import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
    </header>
  )
}

export default NavBar
