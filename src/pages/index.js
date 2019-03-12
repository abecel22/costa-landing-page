import React from "react"
import NavBar from "../components/navBar"
import SideDrawer from "../components/sideDrawer"
import Backdrop from "../components/backdrop"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <NavBar />
    <SideDrawer />
    <Backdrop />
    <h1>In Progress</h1>
    <p>Welcome to Costa a Costa</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
