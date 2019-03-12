import React, { Component } from "react"
import Toolbar from "../components/toolbar"
import SideDrawer from "../components/sideDrawer"
import Backdrop from "../components/backdrop"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler= () => {
    this.setState({sideDrawerOpen: false})
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
    <SideDrawer show={this.state.sideDrawerOpen}/>
    {backdrop}
    
    <h1>In Progress</h1>
    <p>Welcome to Costa a Costa</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
    );
    
  }
}


export default IndexPage
