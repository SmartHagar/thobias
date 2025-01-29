/** @format */

"use client";

// Quickview.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalQuickviewContext } from "@/context/ModalQuickviewContext";
import { BASE_URL } from "@/services/baseURL";
import toastShow from "@/utils/toast-show";
import { Toaster } from "react-hot-toast";
import showRupiah from "@/services/rupiah";
import AddToCart from "@/utils/AddToCart";

const ModalQuickview = () => {
  // state
  const [activeColor, setActiveColor] = useState<string | null>("");
  const [activeSize, setActiveSize] = useState<string | null>("");
  const [quantity, setQuantity] = useState(1);
  // context
  const { selectedProduct, closeQuickview } = useModalQuickviewContext();

  // productImg
  const productImgs = [
    ...(selectedProduct?.product_image &&
    selectedProduct?.product_image?.length > 0
      ? selectedProduct?.product_image.map((item) => item.product_img)
      : []),
    ...(selectedProduct?.product_variant &&
    selectedProduct?.product_variant?.length > 0
      ? selectedProduct?.product_variant.map((item) => item.variant_img)
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
  }, [selectedProduct]);

  // Ambil daftar color unik
  const uniqueColors = Array.from(
    new Set(
      selectedProduct?.product_variant
        .filter((item) => (activeSize ? item.size === activeSize : true))
        .map((item) => item.color)
        .filter(Boolean)
    )
  );

  // Ambil daftar size unik berdasarkan color yang dipilih
  const uniqueSizes = Array.from(
    new Set(
      selectedProduct?.product_variant
        .filter((item) => (activeColor ? item.color === activeColor : true))
        .map((item) => item.size)
        .filter(Boolean)
    )
  );

  const findSelectedVariant = () => {
    // If product has no variants, return the product details
    if (!selectedProduct?.has_variants) {
      return {
        id: selectedProduct?.id,
        product_id: selectedProduct?.id,
        product_variant_id: null,
        price: selectedProduct?.price,
        stock: selectedProduct?.stock,
      };
    }

    // If both size and color are required but not selected, return null
    if (
      selectedProduct.product_variant.some((variant) => variant.size) &&
      !activeSize &&
      selectedProduct.product_variant.some((variant) => variant.color) &&
      !activeColor
    ) {
      return null;
    }

    // Find variant based on selected size and/or color
    const selectedVariant = selectedProduct.product_variant.find(
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

  return (
    <>
      <Toaster />
      <div className={`modal-quickview-block`} onClick={closeQuickview}>
        <div
          className={`modal-quickview-main py-6 ${
            selectedProduct !== null ? "open" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex h-full max-md:flex-col-reverse gap-y-6">
            <div className="left lg:w-[388px] md:w-[300px] flex-shrink-0 px-6">
              <div className="list-img max-md:flex items-center gap-4">
                {productImgs &&
                  productImgs.map(
                    (item, index) =>
                      item && (
                        <div
                          className="bg-img w-full aspect-[3/4] max-md:w-[150px] max-md:flex-shrink-0 rounded-[20px] overflow-hidden md:mt-6"
                          key={index}
                        >
                          <Image
                            src={`${BASE_URL}/${item}`}
                            width={1500}
                            height={2000}
                            alt="Gambar Produk"
                            priority={true}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )
                  )}
              </div>
            </div>
            <div className="right w-full px-4">
              <div className="heading pb-6 px-4 flex items-center justify-between relative">
                <div className="heading5">Quick View</div>
                <div
                  className="close-btn absolute right-0 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                  onClick={closeQuickview}
                >
                  <Icon.X size={14} />
                </div>
              </div>
              <div className="product-infor px-4">
                <div className="flex justify-between">
                  <div>
                    <div className="caption2 text-secondary font-semibold uppercase">
                      Produk
                    </div>
                    <div className="heading4 mt-1">
                      {selectedProduct?.product_nm}
                    </div>
                  </div>
                  {/* <div
                    className={`add-wishlist-btn w-10 h-10 flex items-center justify-center border border-line cursor-pointer rounded-lg duration-300 flex-shrink-0 hover:bg-black hover:text-white ${
                      wishlistState.wishlistArray.some(
                        (item) => item.id === selectedProduct?.id
                      )
                        ? "active"
                        : ""
                    }`}
                    onClick={handleAddToWishlist}
                  >
                    {wishlistState.wishlistArray.some(
                      (item) => item.id === selectedProduct?.id
                    ) ? (
                      <>
                        <Icon.Heart
                          size={20}
                          weight="fill"
                          className="text-red"
                        />
                      </>
                    ) : (
                      <>
                        <Icon.Heart size={20} />
                      </>
                    )}
                  </div> */}
                </div>
                <div className="flex items-center mt-3">
                  {/* <Rate currentRate={selectedProduct?.rate} size={14} />
                  <span className="caption1 text-secondary">
                    (1.234 reviews)
                  </span> */}
                </div>
                <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                  <div className="product-price heading5">
                    {showRupiah(selectedVariantOrProduct?.price || 0)}
                  </div>
                  <div className="desc text-secondary mt-3">
                    <article
                      className="prose lg:prose-xl"
                      dangerouslySetInnerHTML={{
                        __html: selectedProduct?.product_desc || "",
                      }}
                    />
                  </div>
                </div>
                <div className="list-action mt-6">
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
                  <div className="text-title mt-5">Quantity:</div>
                  <div className="choose-quantity flex items-center max-xl:flex-wrap lg:justify-between gap-5 mt-3">
                    <div className="quantity-block md:p-3 max-md:py-1.5 max-md:px-3 flex items-center justify-between rounded-lg border border-line sm:w-[180px] w-[120px] flex-shrink-0">
                      <Icon.Minus
                        onClick={handleDecreaseQuantity}
                        className={`${
                          selectedVariantOrProduct?.stock === 1
                            ? "disabled"
                            : ""
                        } cursor-pointer body1`}
                      />
                      <div className="body1 font-semibold">{quantity}</div>
                      <Icon.Plus
                        onClick={handleIncreaseQuantity}
                        className="cursor-pointer body1"
                      />
                    </div>
                    {selectedVariantOrProduct?.stock && (
                      <span>Stock: {selectedVariantOrProduct?.stock}</span>
                    )}
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
                  <div className="more-infor mt-6">
                    <div className="flex items-center gap-1 mt-3">
                      <div className="text-title">Kategori:</div>
                      <div className="text-secondary">
                        {selectedProduct?.subCategory?.category?.category_nm}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalQuickview;
