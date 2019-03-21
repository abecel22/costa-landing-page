import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/styles/contact-us.css"

class ContactUs extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact Us" />
        <div className="contact-div">
          <h1>Contact Us</h1>
          <form
            className="contact-div__form"
            name="contact"
            method="post"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              className="contact-div__form-part"
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
              className="contact-div__form-part"
              name="email"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="contact-div__form-part contact-div__form-message"
              name="message"
              type="text"
              placeholder="Message"
            />
            <button className="contact-div__form-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

export default ContactUs
