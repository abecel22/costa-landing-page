import React from "react"

import "./styles/sideDrawer.css"

const sideDrawer = props => {
  let drawerClasses= 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
      <nav className={drawerClasses}>
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

}
  


export default sideDrawer
