import React, { useRef, useEffect } from "react";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slider, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
  });

  useEffect(() => {
    if (sliderRef.current) {
      slider(sliderRef.current);
    }
  }, [slider]);

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl">
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-full keen-slider__slide"
            style={{ minWidth: "100%" }}
          >
            <img
              className="w-full h-auto rounded-2xl"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute z-10 transform -translate-y-1/2 left-4 top-1/2"
        onClick={handlePrev}
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        className="absolute z-10 transform -translate-y-1/2 right-4 top-1/2"
        onClick={handleNext}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default ImageSlider;
