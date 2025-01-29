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

SwiperCore.use([Navigation, Thumbs]);

const Detail = () => {
  const swiperRef: any = useRef();
  // state
  const [openPopupImg, setOpenPopupImg] = useState(false);
  const [activeColor, setActiveColor] = useState<string | null>("");
  const [activeSize, setActiveSize] = useState<string | null>("");
  const [quantity, setQuantity] = useState(1);
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
    setActiveColor("");
    setActiveSize("");
    setQuantity(1);
  };

  useEffect(() => {
    resetState();
  }, [showProduct]);

  // Ambil daftar color unik
  const uniqueColors = Array.from(
    new Set(
      showProduct?.product_variant
        .filter((item) => (activeSize ? item.size === activeSize : true))
        .map((item) => item.color)
        .filter(Boolean)
    )
  );

  // Ambil daftar size unik berdasarkan color yang dipilih
  const uniqueSizes = Array.from(
    new Set(
      showProduct?.product_variant
        .filter((item) => (activeColor ? item.color === activeColor : true))
        .map((item) => item.size)
        .filter(Boolean)
    )
  );

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

  // Handle perubahan pada color
  const handleActiveColor = (color: string) => {
    setActiveColor(color);
    findSelectedVariant();
  };

  // Handle perubahan pada size
  const handleActiveSize = (size: string) => {
    setActiveSize(size);
    findSelectedVariant();
  };

  // setActiveSize and setActiveColor if uniqueColors or uniqueSizes not empty
  useEffect(() => {
    if (uniqueColors.length > 0) {
      setActiveColor(uniqueColors[0]);
    }
    if (uniqueSizes.length > 0) {
      setActiveSize(uniqueSizes[0]);
    }
  }, [uniqueColors, uniqueSizes]);

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

  console.log({ showProduct });

  return (
    <div className="product-detail default">
      {/* image */}
      <div className="featured-product underwear md:py-20 py-10">
        <div className="container flex justify-between gap-y-6 flex-wrap">
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
              <Rate currentRate={5} size={14} />
              <span className="caption1 text-secondary">(1.234 reviews)</span>
            </div>
            <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
              <div className="product-price heading5">
                {showRupiah(selectedVariantOrProduct?.price || 0)}
              </div>
              <div className="w-px h-4 bg-line"></div>
              <div className="desc text-secondary mt-3">
                <article
                  className="prose lg:prose-xl"
                  dangerouslySetInnerHTML={{
                    __html: showProduct?.product_desc || "",
                  }}
                />
              </div>
            </div>
            <div className="list-action mt-6">
              <div className="choose-color">
                <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                  {uniqueColors.length > 0 && (
                    <div className="choose-color">
                      <div className="text-title">
                        Colors:{" "}
                        <span className="text-title color">{activeColor}</span>
                      </div>
                      <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                        <div className="right flex items-center gap-3">
                          <div className="select-block relative">
                            <select
                              id="select-filter"
                              name="select-filter"
                              className="caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line"
                              onChange={(e) => {
                                handleActiveColor(e.target.value);
                              }}
                            >
                              {uniqueColors.map((item, index) => (
                                <option value={item} key={index}>
                                  {item}
                                </option>
                              ))}
                            </select>
                            <Icon.CaretDown
                              size={12}
                              className="absolute top-1/2 -translate-y-1/2 md:right-4 right-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="choose-size mt-5">
                <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                  {uniqueSizes.length > 0 && (
                    <div className="choose-size mt-5">
                      <div className="heading flex items-center justify-between">
                        <div className="text-title">
                          Size:{" "}
                          <span className="text-title size">{activeSize}</span>
                        </div>
                      </div>
                      <div className="list-size flex items-center gap-2 flex-wrap mt-3">
                        {uniqueSizes.map((size, index) => (
                          <div
                            className={`size-item ${
                              size === "freesize" ? "px-3 py-2" : "w-12 h-12"
                            } flex items-center justify-center text-button rounded-full bg-white border border-line ${
                              activeSize === size ? "active" : ""
                            }`}
                            key={index}
                            onClick={() => handleActiveSize(size)}
                          >
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
                <div className="button-main w-full text-center">Buy It Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-block md:py-20 py-10 bg-surface">
        <div className="container">
          <div className="heading flex items-center justify-between flex-wrap gap-4">
            <div className="heading4">Customer Review</div>
          </div>
          <div className="top-overview flex justify-between py-6 max-md:flex-col gap-y-6">
            <div className="rating lg:w-1/4 md:w-[30%] lg:pr-[75px] md:pr-[35px]">
              <div className="heading flex items-center justify-center flex-wrap gap-3 gap-y-4">
                <div className="text-display">4.6</div>
                <div className="flex flex-col items-center">
                  <Rate currentRate={5} size={18} />
                  <div className="text-secondary text-center mt-1">
                    (1,968 Ratings)
                  </div>
                </div>
              </div>
              <div className="list-rating mt-3">
                <div className="item flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1">
                    <div className="caption1">5</div>
                    <Icon.Star size={14} weight="fill" />
                  </div>
                  <div className="progress bg-line relative w-3/4 h-2">
                    <div className="progress-percent absolute bg-yellow w-[50%] h-full left-0 top-0"></div>
                  </div>
                  <div className="caption1">50%</div>
                </div>
                <div className="item flex items-center justify-between gap-1.5 mt-1">
                  <div className="flex items-center gap-1">
                    <div className="caption1">4</div>
                    <Icon.Star size={14} weight="fill" />
                  </div>
                  <div className="progress bg-line relative w-3/4 h-2">
                    <div className="progress-percent absolute bg-yellow w-[20%] h-full left-0 top-0"></div>
                  </div>
                  <div className="caption1">20%</div>
                </div>
                <div className="item flex items-center justify-between gap-1.5 mt-1">
                  <div className="flex items-center gap-1">
                    <div className="caption1">3</div>
                    <Icon.Star size={14} weight="fill" />
                  </div>
                  <div className="progress bg-line relative w-3/4 h-2">
                    <div className="progress-percent absolute bg-yellow w-[10%] h-full left-0 top-0"></div>
                  </div>
                  <div className="caption1">10%</div>
                </div>
                <div className="item flex items-center justify-between gap-1.5 mt-1">
                  <div className="flex items-center gap-1">
                    <div className="caption1">2</div>
                    <Icon.Star size={14} weight="fill" />
                  </div>
                  <div className="progress bg-line relative w-3/4 h-2">
                    <div className="progress-percent absolute bg-yellow w-[10%] h-full left-0 top-0"></div>
                  </div>
                  <div className="caption1">10%</div>
                </div>
                <div className="item flex items-center justify-between gap-1.5 mt-1">
                  <div className="flex items-center gap-2">
                    <div className="caption1">1</div>
                    <Icon.Star size={14} weight="fill" />
                  </div>
                  <div className="progress bg-line relative w-3/4 h-2">
                    <div className="progress-percent absolute bg-yellow w-[10%] h-full left-0 top-0"></div>
                  </div>
                  <div className="caption1">10%</div>
                </div>
              </div>
            </div>
            <div className="list-img lg:w-3/4 md:w-[70%] lg:pl-[15px] md:pl-[15px]">
              <div className="heading5">
                Semua Gambar ({productImgs?.length})
              </div>
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
              <div className="sorting flex items-center flex-wrap md:gap-5 gap-3 gap-y-3 mt-6">
                <div className="text-button">Sort by</div>
                <div className="item bg-white px-4 py-1 border border-line rounded-full">
                  Newest
                </div>
                <div className="item bg-white px-4 py-1 border border-line rounded-full">
                  5 Star
                </div>
                <div className="item bg-white px-4 py-1 border border-line rounded-full">
                  4 Star
                </div>
                <div className="item bg-white px-4 py-1 border border-line rounded-full">
                  3 Star
                </div>
                <div className="item bg-white px-4 py-1 border border-line rounded-full">
                  2 Star
                </div>
                <div className="item bg-white px-4 py-1 border border-line rounded-full">
                  1 Star
                </div>
              </div>
            </div>
          </div>
          {/* list Review */}
          <ListReview dtReviews={showProduct?.review as any} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
