import React from "react"
import Slider from "react-slick"

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: false,
      fade: true,
    }
    return (
      <Slider {...settings}>
        <div>
          <h4>
            Fast shipper! Excellent customer service! Just as described! Thanks
            again!
          </h4>
        </div>
        <div>
          <h4>
            {" "}
            Excellent seller, well packed and quick shipping, highly
            recommend!!!
          </h4>
        </div>
        <div>
          <h4>
            {" "}
            High quality, works great. Thank you for good packaging and fast
            service!
          </h4>
        </div>
      </Slider>
    )
  }
}

export default Carousel
