import React from "react"

import untuckit from "../images/untuckit.jpg"

import Layout from "../components/layout"
import "../components/styles/shop.css"
import SEO from "../components/seo"

const Shop = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="shop-div">
      <div className="shop-div__headings">
        <h1>Shop</h1>
        <h3>Stand Out in Style</h3>
        <p>Find pre-owned or new fasion items from our Ebay store. </p>
      </div>
      <div className="shop-div__grid">
        <div className="shop-div__grid-part">
          <h4>Business Attire</h4>
          <img src={untuckit} alt="" />
          <p>Top Brands- Untuckit, Robert Grahm, Polo, etc..</p>
        </div>
        <div className="shop-div__grid-part">
          <h4>Business Attire</h4>
          <img src={untuckit} alt="" />
          <p>Top Brands- Untuckit, Robert Grahm, Polo, etc..</p>
        </div>{" "}
        <div className="shop-div__grid-part">
          <h4>Business Attire</h4>
          <img src={untuckit} alt="" />
          <p>Top Brands- Untuckit, Robert Grahm, Polo, etc..</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Shop
