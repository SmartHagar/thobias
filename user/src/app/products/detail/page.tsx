/** @format */
"use client";
import useProductsApi from "@/store/api/Products";
import Image from "next/image";
// import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css/bundle";
import { BASE_URL } from "@/services/baseURL";
import Rate from "@/components/Other/Rate";
import showRupiah from "@/services/rupiah";
import toastShow from "@/utils/toast-show";
import AddToCart from "@/utils/AddToCart";
import ListReview from "@/components/Other/ListReview";
import Variants from "@/components/Other/Variants";

SwiperCore.use([Navigation, Thumbs]);

const Detail = () => {
  const swiperRef: any = useRef();
  // state
  const [openPopupImg, setOpenPopupImg] = useState(false);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [rateProduct, setRateProduct] = useState(0);
  //  params
  const searchParams = useSearchParams();
  const product_id = searchParams.get("product_id");
  // store
  const { setShowProducts, showProduct } = useProductsApi();

  useEffect(() => {
    if (product_id) {
      setShowProducts(product_id);
    }
  }, [product_id, setShowProducts]);

  // productImg
  const productImgs = [
    ...(showProduct?.product_image && showProduct?.product_image?.length > 0
      ? showProduct?.product_image.map((item) => item.product_img)
      : []),
    ...(showProduct?.product_variant && showProduct?.product_variant?.length > 0
      ? showProduct?.product_variant.map((item) => item.variant_img)
      : []),
  ];

  // reset state
  const resetState = () => {
    setActiveColor(null);
    setActiveSize(null);
    setQuantity(1);
  };

  useEffect(() => {
    resetState();
  }, [showProduct]);

  const findSelectedVariant = () => {
    // If product has no variants, return the product details
    if (!showProduct?.has_variants) {
      return {
        id: showProduct?.id,
        product_id: showProduct?.id,
        product_variant_id: null,
        price: showProduct?.price,
        stock: showProduct?.stock,
      };
    }

    // If both size and color are required but not selected, return null
    if (
      showProduct.product_variant.some((variant) => variant.size) &&
      !activeSize &&
      showProduct.product_variant.some((variant) => variant.color) &&
      !activeColor
    ) {
      return null;
    }

    // Find variant based on selected size and/or color
    const selectedVariant = showProduct.product_variant.find(
      (variant) =>
        (!activeSize || variant.size === activeSize) &&
        (!activeColor || variant.color === activeColor)
    );

    // Return variant details with product_variant_id if found
    return selectedVariant
      ? {
          ...selectedVariant,
          product_id: selectedVariant.product_id,
          product_variant_id: selectedVariant.id,
        }
      : null;
  };

  const selectedVariantOrProduct = findSelectedVariant();

  const handleIncreaseQuantity = () => {
    if (selectedVariantOrProduct?.stock) {
      const stock = selectedVariantOrProduct.stock;
      setQuantity((prevQuantity) => {
        if (prevQuantity < stock) {
          return prevQuantity + 1;
        }
        return prevQuantity; // Tetap pada nilai sebelumnya jika stock habis
      });
    } else {
      toastShow({
        event: {
          type: "error",
          message: "Pilih ukuran atau warna terlebih dahulu",
        },
      });
    }
  };
  const handleDecreaseQuantity = () =>
    setQuantity((prevQuiantity) => Math.max(prevQuiantity - 1, 1));

  return (
    <div className="product-detail default">
      {/* image */}
      <div className="featured-product underwear md:py-20">
        <div className="container flex justify-between flex-wrap">
          <div className="list-img md:w-1/2 md:pr-[45px] w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              modules={[Thumbs]}
              className="mySwiper2 rounded-2xl overflow-hidden"
            >
              {productImgs.map((item, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    swiperRef.current?.slideTo(index);
                    setOpenPopupImg(true);
                  }}
                >
                  <Image
                    src={`${BASE_URL}/${item}`}
                    width={1000}
                    height={1000}
                    alt="prd-img"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={`popup-img ${openPopupImg ? "open" : ""}`}>
              <span
                className="close-popup-btn absolute top-4 right-4 z-[2] cursor-pointer"
                onClick={() => {
                  setOpenPopupImg(false);
                }}
              >
                <Icon.X className="text-3xl text-white" />
              </span>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation, Thumbs]}
                navigation={true}
                loop={true}
                className="popupSwiper"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {productImgs.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => {
                      setOpenPopupImg(false);
                    }}
                  >
                    <Image
                      src={`${BASE_URL}/${item}`}
                      width={1000}
                      height={1000}
                      alt="prd-img"
                      className="w-full aspect-[3/4] object-cover rounded-xl"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="product-infor md:w-1/2 w-full lg:pl-[15px] md:pl-2">
            <div className="flex justify-between">
              <div>
                <div className="caption2 text-secondary font-semibold uppercase">
                  {showProduct?.subCategory?.sub_category_nm}
                </div>
                <div className="heading4 mt-1">{showProduct?.product_nm}</div>
              </div>
              {/* <div
                className={`add-wishlist-btn w-12 h-12 flex items-center justify-center border border-line cursor-pointer rounded-xl duration-300 hover:bg-black hover:text-white ${
                  wishlistState.wishlistArray.some(
                    (item) => item.id === productMain.id
                  )
                    ? "active"
                    : ""
                }`}
                onClick={handleAddToWishlist}
              >
                {wishlistState.wishlistArray.some(
                  (item) => item.id === productMain.id
                ) ? (
                  <>
                    <Icon.Heart
                      size={24}
                      weight="fill"
                      className="text-white"
                    />
                  </>
                ) : (
                  <>
                    <Icon.Heart size={24} />
                  </>
                )}
              </div> */}
            </div>
            <div className="flex items-center mt-3">
              <Rate currentRate={rateProduct} size={14} />
              <span className="caption1 text-secondary">({rateProduct})</span>
            </div>
            <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
              <div className="product-price heading5">
                {showRupiah(selectedVariantOrProduct?.price || 0)}
              </div>
            </div>
            <div className="list-action mt-2">
              <div>
                {showProduct && showProduct?.product_variant?.length > 0 && (
                  <Variants
                    product_variant={showProduct?.product_variant}
                    activeColor={activeColor}
                    activeSize={activeSize}
                    setActiveColor={setActiveColor}
                    setActiveSize={setActiveSize}
                  />
                )}
              </div>
              <div className="text-title mt-5">Quantity:</div>
              <div className="choose-quantity flex items-center lg:justify-between gap-5 gap-y-3 mt-3">
                <div className="quantity-block md:p-3 max-md:py-1.5 max-md:px-3 flex items-center justify-between rounded-lg border border-line sm:w-[180px] w-[120px] flex-shrink-0">
                  <Icon.Minus
                    onClick={handleDecreaseQuantity}
                    className={`${
                      selectedVariantOrProduct?.stock === 1 ? "disabled" : ""
                    } cursor-pointer body1`}
                  />
                  <div className="body1 font-semibold">{quantity}</div>
                  <Icon.Plus
                    onClick={handleIncreaseQuantity}
                    className="cursor-pointer body1"
                  />
                </div>
                <AddToCart
                  selectedVariantOrProduct={selectedVariantOrProduct as any}
                  quantity={quantity}
                />
              </div>
              <div className="button-block mt-5">
                <div className="button-main w-full text-center">
                  Beli Sekarang
                </div>
              </div>
            </div>
            <div className="desc text-secondary my-3">
              <article
                className="prose lg:prose-xl"
                dangerouslySetInnerHTML={{
                  __html: showProduct?.product_desc || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="review-block md:py-20 py-10 bg-surface">
        <div className="container">
          <div className="list-img lg:w-3/4 md:w-[70%] lg:pl-[15px] md:pl-[15px] mb-6">
            <div className="heading5">Semua Gambar ({productImgs?.length})</div>
            <div className="list md:mt-6 mt-3">
              <Swiper
                spaceBetween={16}
                slidesPerView={3}
                modules={[Navigation]}
                breakpoints={{
                  576: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                  992: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1290: {
                    slidesPerView: 7,
                    spaceBetween: 20,
                  },
                }}
              >
                {productImgs.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={`${BASE_URL}/${item}`}
                      width={400}
                      height={400}
                      alt=""
                      className="w-[120px] aspect-square object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* list Review */}
          <ListReview
            dtReviews={showProduct?.review as any}
            setRateProduct={setRateProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
