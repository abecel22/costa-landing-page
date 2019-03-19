import React from "react"
import Carousel from "../components/carousel"
import costa from "../images/costa.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/styles/about-us.css"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="about-div">
      <h1>About Us</h1>
      <div className="about-div__body">
        <div className="about-div__body-image">
          <img src={costa} alt="" />
        </div>
        <div className="about-div__body-content">
          <p>
            Welcome to CostaACosta! We are your number one source for all things
            from business attire to active wear. We're dedicated to giving you
            the very best of service, with a focus on customer service,fast
            shipping, uniqueness.
          </p>
          <p>
            Founded in 2017 by Claudia Acosta, CostaACosta has come a long way
            from its beginnings in Houston, TX. When Claudia first started out,
            her passion for providing the best quality in clothing drove her to
            do intense research and gave her the impetus to turn hard work and
            inspiration into to a booming online store. We now serve customers
            all over the US, and are thrilled to be a part of the resale
            industry. We hope you enjoy our products as much as we enjoy
            offering them to you. If you have any questions or comments, please
            don't hesitate to contact us. Sincerely,Claudia Acosta
          </p>
        </div>
      </div>{" "}
      <div className="carousel-container">
        <h3>Recent Reviews</h3>
        <Carousel />
      </div>
    </div>
  </Layout>
)

export default AboutUs
