import React from "react"
import "./main.css"

const NavBar = () => {
  return (
    <nav>
      <ul className="container">
        <li className="nav-item brand">Costa A Costa</li>
        <li className="nav-item">Home</li>
        <li className="nav-item">Shop</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">About Us</li>
      </ul>
    </nav>
  )
}

export default NavBar
