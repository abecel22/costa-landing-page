import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import NavBar from "./navBar"
import SideDrawer from "./sideDrawer"
import Backdrop from "./backdrop"

import "./styles/layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{ height: "100%" }}>
        <NavBar />
        <SideDrawer />
        <Backdrop />
        <main style={{ marginTop: "60px" }}>{children}</main>
        {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
