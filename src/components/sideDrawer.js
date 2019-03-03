import React from "react"

import "./styles/sideDrawer.css"

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Shop</a>
      </li>
      <li>
        <a href="/">Contact Us</a>
      </li>
      <li>
        <a href="/">About Us</a>
      </li>
    </ul>
  </nav>
)

export default sideDrawer
