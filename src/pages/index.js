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

        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
}

export default IndexPage
