import React from "react";
import Slider from "react-slick";
import Arrow from "./arrow";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    prevArrow: (
      <Arrow
        className="slick-prev"
        style={{ left: "15px" }}
        onClick={() => {}}
      />
    ),
    nextArrow: (
      <Arrow
        className="slick-next"
        style={{ right: "15px" }}
        onClick={() => {}}
      />
    ),
  };

  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              className="w-full h-auto rounded-2xl"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
