/** @format */

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useRouter } from "next/navigation";
import useCategoriesApi from "@/store/api/Categories";
import { BASE_URL } from "@/services/baseURL";
// import Fade from 'react-reveal'

// Fungsi untuk mengecek apakah kategori memiliki gambar
const hasImages = (category: any) => {
  let hasImg = false;

  // Cek setiap sub kategori
  category.sub_category.forEach((subCat: any) => {
    // Cek setiap produk dalam sub kategori
    subCat.product.forEach((product: any) => {
      // Cek apakah ada product_image
      if (product.product_image.length > 0) {
        hasImg = true;
      }
      // Cek apakah ada variant_img
      product.product_variant.forEach((variant: any) => {
        if (variant.variant_img) {
          hasImg = true;
        }
      });
    });
  });

  return hasImg;
};

// Fungsi untuk mengumpulkan semua gambar dari kategori
const getImagesFromCategory = (category: any) => {
  const images: string[] = [];

  category.sub_category.forEach((subCat: any) => {
    subCat.product.forEach((product: any) => {
      // Tambahkan product_image
      product.product_image.forEach((img: any) => {
        images.push(img.product_img);
      });
      // Tambahkan variant_img
      product.product_variant.forEach((variant: any) => {
        if (variant.variant_img) {
          images.push(variant.variant_img);
        }
      });
    });
  });

  return images;
};

// Fungsi utama untuk memproses data
const processCategories = (data: any[]) => {
  return data
    .filter((category) => hasImages(category))
    .map((category) => ({
      id: category.id,
      category_nm: category.category_nm,
      img: getImagesFromCategory(category),
    }));
};

const Collection = () => {
  const router = useRouter();
  // store
  const { setCategoriesAll, dtCategories } = useCategoriesApi();
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    setCategoriesAll();
  }, []);

  useEffect(() => {
    if (dtCategories) {
      setCategories(processCategories(dtCategories));
    }
  }, [dtCategories]);

  const handleTypeClick = (type: string) => {
    router.push(`/products?category_id=${type}`);
  };

  return (
    <>
      <div className="collection-block md:pt-20 pt-10">
        <div className="container">
          <div className="heading3 text-center">Explore Collections</div>
        </div>
        <div className="list-collection section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
          <Swiper
            spaceBetween={12}
            slidesPerView={2}
            navigation
            loop={true}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="h-full"
          >
            {dtCategories &&
              categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <div
                    className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => handleTypeClick(category.id)}
                  >
                    <div className="bg-img">
                      <Image
                        src={`${BASE_URL}/${category.img[0]}`}
                        width={1000}
                        height={600}
                        alt={category.category_nm}
                      />
                    </div>
                    <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                      {category.category_nm}
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

export default Collection;
