import React from "react";
import ImageData from "../data/ImageData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    current === 0 ? setCurrent(ImageData.length - 1) : setCurrent(current - 1);
  };

  const nextSlide = () => {
    current === ImageData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  return (
    <section className="relative h-screen flex justify-center items-center ">
      <AiOutlineArrowLeft
        className="absolute top-[50%] left-[300px] text-[5rem] z-10 cursor-pointer text-white"
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className="absolute top-[50%] right-[300px] text-[5rem] z-10 cursor-pointer text-white"
        onClick={nextSlide}
      />
      {ImageData.map((data, index) => {
        return (
          <div
            key={index}
            className={`${
              current === index
                ? "opacity-1 scale-150 duration-1000"
                : "opacity-0"
            }`}
          >
            {index === current && (
              <div>
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-[600px] h-[400px] rounded-lg"
                />
                <p className="text-white text-center text-3xl font-bold flex justify-center mt-10">
                  {data.title}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
