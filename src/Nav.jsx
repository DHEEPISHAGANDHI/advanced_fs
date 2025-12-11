import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <ol>
          <li>
            <Link to="/">Home</Link> </li>
            <li>
              <Link to="/adduser">Login</Link>
              </li>
            <li>
              <Link to="/getuser">Register</Link>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ol>
    </nav>
  )
}

export default Nav;
