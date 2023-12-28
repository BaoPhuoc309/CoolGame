import Slider from "react-slick";
import { sliderImages } from "../../ultility/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss";

const ImageSlider = () => {
  const settings = {
    className: "center",
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-wrapper section">
      <Slider {...settings} className="game-slider">
        {sliderImages.map((image, idx) => (
          <div className="slider-item img-fit-cover" key={idx}>
            <img src={image} className="slider-item-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
