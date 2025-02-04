/** @format */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

const sliderData = [
  {
    id: 1,
    title: "VCO Coco Tama",
    subtitle: "Kesahatan Tubuh dan Lingkungan",
    href: "/shop/breadcrumb-img",
    button: "Shop Now",
    img: "/images/slider/bg2.png",
  },
  {
    id: 2,
    title: "Minyak Aifa",
    subtitle: "Minyak Asli Papua",
    href: "/shop/breadcrumb-img",
    button: "Shop Now",
    img: "/images/slider/bg1.png",
  },
];

const SliderOne = () => {
  return (
    <>
      <div className="slider-block style-one bg-green xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
        <div className="slider-main h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="h-full relative"
            autoplay={{
              delay: 4000,
            }}
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slider-item h-full w-full relative">
                  <div className="container w-full h-full flex items-center relative">
                    <div className="text-content basis-1/2">
                      <div className="text-sub-display mr-2">
                        {item.subtitle}
                      </div>
                      <div className="text-display md:mt-5 mt-2">
                        {item.title}
                      </div>
                      <Link
                        href={item.href}
                        className="button-main md:mt-8 mt-3"
                      >
                        {item.button}
                      </Link>
                    </div>
                    <div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-[16px] bottom-0">
                      <Image
                        src={item.img}
                        width={670}
                        height={936}
                        alt="bg1-1"
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderOne;
