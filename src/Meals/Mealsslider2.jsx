import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Mealsslider2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  const logos = [
    "/content/img/logos/business-insider.png",
    "/content/img/logos/forbes.png",
    "/content/img/logos/techcrunch.png",
    "/content/img/logos/the-new-york-times.png",
    "/content/img/logos/usa-today.png",
   "/content/img/logos/techcrunch.png",
    "/content/img/logos/the-new-york-times.png",
  ];

  const head = {
    title: "As featured in"
  }

  return (
    <div  style={{ width: "900px", margin: "auto", padding: "40px 0" }}>
      <h4 className="uppercase text-center  text-gray-400  mt-3" style={{fontWeight:"bold", fontSize:"10px"}}>{head.title}</h4>
      <Slider {...settings}>
        {logos.map((logo) => (
          <div className="mt-7" style={{ padding: "0 5px" }}>
            <img  className="logo-dark"
              src={logo}
              style={{ width: "100%", maxWidth: "105px", display: "block", margin: "auto" ,filter:"grayscale(100%)"}}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Mealsslider2;
