import React from "react"

import "./styles/sideToggleButton.css"

const sideToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <span className="toggle-button__line" />
    <span className="toggle-button__line" />
    <span className="toggle-button__line" />
  </button>
)

export default sideToggleButton
