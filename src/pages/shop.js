import React from "react"

import lululemon from "../images/lululemon.jpg"
import eton from "../images/eton.jpg"
import eagles from "../images/eagles.jpg"
import ebay from "../images/002-ebay.png"

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
        <p>
          Find pre-owned or new fasion items at our{" "}
          <a href="https://www.ebay.com/str/Costaacosta/">
            <img src={ebay} alt="" />{" "}
          </a>
          store.
        </p>
      </div>
      <div className="shop-div__grid">
        <div className="shop-div__grid-part">
          <h4>Business Attire</h4>
          <a href="https://www.ebay.com/str/Costaacosta/">
            <img src={eton} alt="" />
          </a>
          <p>
            Top Brands- Brioni ,Eton, Mizzen+Main, Ministry of Supply, etc..
          </p>
        </div>
        <div className="shop-div__grid-part">
          <h4>Athletic Apparel</h4>
          <a href="https://www.ebay.com/str/Costaacosta/">
            <img src={lululemon} alt="" />
          </a>
          <p>Top Brands- Lululemon, Patagonia, Kuhl, Nike etc...</p>
        </div>{" "}
        <div className="shop-div__grid-part">
          <h4>Vintage</h4>
          <a href="https://www.ebay.com/str/Costaacosta/">
            <img src={eagles} alt="" />
          </a>
          <p>Concert, Ralph Lauren Polo, 90’s tees etc...</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Shop
