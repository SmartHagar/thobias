/** @format */

import React from "react";
import WhatNewOne from "@/components/Home1/WhatNewOne";
import productData from "@/data/Product.json";
import Collection from "@/components/Home1/Collection";
import TabFeatures from "@/components/Home1/TabFeatures";
import Banner from "@/components/Home1/Banner";
import Benefit from "@/components/Home1/Benefit";
import testimonialData from "@/data/Testimonial.json";
import Testimonial from "@/components/Home1/Testimonial";
import Instagram from "@/components/Home1/Instagram";
import Brand from "@/components/Home1/Brand";
import Footer from "@/components/Footer/Footer";
import ModalNewsletter from "@/components/Modal/ModalNewsletter";
import TopNavThree from "@/components/Header/TopNav/TopNavThree";
import MenuFour from "@/components/Header/Menu/MenuFour";
import SliderOne from "@/components/Slider/SliderOne";

export default function Home() {
  return (
    <>
      <TopNavThree props="style-one bg-linear text-white" />
      <div id="header" className="relative w-full">
        <MenuFour props="bg-white" />
        <SliderOne />
      </div>
      <WhatNewOne data={productData} start={0} limit={4} />
      <Collection />
      <TabFeatures data={productData} start={0} limit={6} />
      <Banner />
      <Benefit props="md:py-20 py-10" />
      <Testimonial data={testimonialData} limit={6} />
      <Instagram />
      <Brand />
      <Footer />
      <ModalNewsletter />
    </>
  );
}
