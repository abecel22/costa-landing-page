import React from "react"

import "./styles/navBar.css"

const NavBar = () => {
  return (
    <header className="toolbar">
      <nav className="toolbar__nav">
        <div />
        <div className="toolbar__logo">
          <a href="/">Costa A Costa</a>
        </div>
        <div className="toolbar__spacer" />
        <div className="toolbar_nav-items">
          <ul>
            <li>
              <a href="/">Home</a>{" "}
            </li>
            <li>
              <a href="/">Shop</a>{" "}
            </li>
            <li>
              <a href="/">Contact Us</a>{" "}
            </li>
            <li>
              <a href="/">About Us</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
