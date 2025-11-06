import React from 'react'

const Navbar = ({logo_path}) => {
  return (
    <div className='navbar'>
        <img src={logo_path} alt="asd" />
        <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default Navbar