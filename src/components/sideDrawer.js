import React from "react"
import { Link } from "gatsby"

import "./styles/sideDrawer.css"

const sideDrawer = props => {
  let drawerClasses = "side-drawer"
  if (props.show) {
    drawerClasses = "side-drawer open"
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop/">Shop</Link>
        </li>
        <li>
          <Link to="/contactUs/">Contact Us</Link>
        </li>
        <li>
          <Link to="/aboutUs/">About Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer
