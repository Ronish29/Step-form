import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "styled-jsx/css";

const HomePageBrands = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallestScreen, setIsSmallestScreen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 3,
        },
      }
    ],
  };

  useEffect(() => {
    const checkMediaQueries = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 640px)").matches);
      setIsSmallestScreen(window.matchMedia("(max-width: 375px)").matches);
    };
    checkMediaQueries();
    window.addEventListener("resize", checkMediaQueries);
    return () => {
      window.removeEventListener("resize", checkMediaQueries);
    };
  }, []);

  const brandData = [
    { url: "/images/homepage-brands/brand-circle.webp" },
    { url: "/images/homepage-brands/brand-amara.webp" },
    { url: "/images/homepage-brands/brand-aven.webp" },
    { url: "/images/homepage-brands/brand-earth.webp" },
    { url: "/images/homepage-brands/brand-goldline.webp" },
    { url: "/images/homepage-brands/brand-utosia.webp" },
  ];

  return (
    <div className="w-full mt-5 h-fit border-b-[2px] border-[#00000036]  ">
      <div className={`container mx-auto py-10 flex justify-center items-center 2xl:px-7 xl:px-7 lg:px-7 md:px-7 sm:px-4  ${isSmallScreen ? "px-4 py-2" : ""} ${isSmallestScreen ? "px-4 py-2" : ""}`}>
        <Slider {...settings} className="w-full">
          {brandData.map((item, index) => (
            <div key={index} className="flex justify-center items-center h-12 px-2">
              <img
                src={item.url}
                alt=""
                className={`max-w-[120px] object-contain h-full ${
                  isSmallScreen ? "max-w-[80px]" : ""
                } ${isSmallestScreen ? "max-w-[60px]" : ""}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageBrands;
