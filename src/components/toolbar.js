import React from "react"
import SideToggleButton from "./sideToggleButton"
import { Link } from "gatsby"

import "./styles/toolbar.css"

const NavBar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar__nav">
        <div className="toolbar__toggle-button">
          <SideToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/">Costa A Costa</a>
        </div>
        <div className="toolbar__spacer" />
        <div className="toolbar_nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop/">Shop</Link>
            </li>
            <li>
              <Link to="/contact-us/">Contact Us</Link>
            </li>
            <li>
              <Link to="/about-us/">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
