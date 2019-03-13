import React from "react"
import FeatureIcons from "./featureIcons"
import rating from "../images/003-rating.svg"
import payment from "../images/001-payment.svg"
import present from "../images/002-present.svg"

import "./styles/iconColumns.css"

function iconColumns() {
  return (
    <div className="columns-div">
      <FeatureIcons
        imgPath={rating}
        imgAlt="A fashion icon"
        subtitle="Fashion"
        imgText="This is wher you tell about your products. Vintage, etc."
      />
      <FeatureIcons
        imgPath={payment}
        imgAlt="A smartphone icon"
        subtitle="Order Online"
        imgText="This is where you tell about how easy it is to order."
      />
      <FeatureIcons
        imgPath={present}
        imgAlt="Fast Shipping"
        subtitle="Fashion"
        imgText="This is where you tell about how your shipping works."
      />
    </div>
  )
}

export default iconColumns
