import React from "react"

function featureIcons(props) {
  return (
    <div className="columns-div__part">
      <img
        className="columns-div__icon"
        auto
        widthx50
        src={props.imgPath}
        alt={props.imgAlt}
      />
      <h3 className="columns-div__subtitle">{props.subtitle}</h3>
      <p className="columns-div__text">{props.imgText}</p>
    </div>
  )
}

export default featureIcons
