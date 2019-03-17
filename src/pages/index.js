import React, { Component } from "react"
import Banner from "../components/banner"
import IconColumns from "../components/iconColumns"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`costaacosta`, `costa`, `ebay`]} />
        <Banner />
        <IconColumns />
      </Layout>
    )
  }
}

export default IndexPage
