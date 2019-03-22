import React from "react"
import Slider from "react-slick"

class Carousel extends React.Component {
  render() {
    let settings = {
      dots: true,
      className: "slider-div",
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: false,
      fade: true,
    }

    const reviews = [
      " Fast shipper! Excellent customer service! Just as described! Thanks again!",
      "Excellent seller, well packed and quick shipping, highly recommend!!!",
      " High quality, works great. Thank you for good packaging and fast service!",
      "Awesome product, fast shipping! A+++ seller, highly recommend!",
      "Great Seller. Highly Recommended. Would Do Business Again. 5 stars*****",
    ]

    return (
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review}</p>
          </div>
        ))}
      </Slider>
    )
  }
}

export default Carousel
