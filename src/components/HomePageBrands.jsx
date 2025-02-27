import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageBrands = () => {
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

  const brandData = [
    { url: "/images/homepage-brands/brand-circle.webp" },
    { url: "/images/homepage-brands/brand-amara.webp" },
    { url: "/images/homepage-brands/brand-aven.webp" },
    { url: "/images/homepage-brands/brand-earth.webp" },
    { url: "/images/homepage-brands/brand-goldline.webp" },
    { url: "/images/homepage-brands/brand-utosia.webp" },
  ];

  return (
    <div className="w-full mt-5 h-fit border-b-[2px] border-[#00000036]">
      <div className="container mx-auto py-2 sm:py-10 md:py-10 lg:py-10 xl:py-10 2xl:py-10 flex justify-center items-center 
                     px-4 sm:px-4 md:px-7 lg:px-7 xl:px-7 2xl:px-7">
            <Slider {...settings} className="w-full">
              {brandData.map((item, index) => (
                <div key={index} className="flex justify-center items-center h-12 px-2">
                  <img
                    src={item.url}
                    alt="Brand logo"
                    className="w-homepage-brands-375 sm:w-homepage-brands-640 md:w-homepage-brands-default 
                              object-contain h-full"
                  />
                </div>
              ))}
            </Slider>
      </div>
    </div>
  );
};

export default HomePageBrands;