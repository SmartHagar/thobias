/** @format */

"use client";

import React from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalCartContext } from "@/context/ModalCartContext";
// import { useModalWishlistContext } from "@/context/ModalWishlistContext";
import { useModalQuickviewContext } from "@/context/ModalQuickviewContext";
import { useRouter } from "next/navigation";
import ProductsTypes from "@/type/ProductsType";
import { BASE_URL } from "@/services/baseURL";
import showRupiah from "@/services/rupiah";

interface ProductProps {
  data: ProductsTypes;
  type: string;
  style: string;
}

const Product: React.FC<ProductProps> = ({ data, style }) => {
  const { openModalCart } = useModalCartContext();
  // const { openModalWishlist } = useModalWishlistContext();
  const { openQuickview } = useModalQuickviewContext();
  const router = useRouter();

  const imgProduk =
    data?.product_image?.find((item) => item.is_main)?.product_img ??
    data?.product_variant?.[0]?.variant_img ??
    "";

  const handleAddToCart = () => {
    openModalCart();
  };

  const price = data?.product_variant?.[0]?.price || data.price;

  // const handleAddToWishlist = () => {
  //   openModalWishlist();
  // };

  const handleQuickviewOpen = () => {
    openQuickview(data);
  };

  const handleDetailProduct = (productId: string) => {
    // redirect to shop with category selected
    router.push(`/product/default?id=${productId}`);
  };

  const percentSold = Math.floor(100);

  return (
    <div className={`product-item grid-type ${style}`}>
      <div
        onClick={() => handleDetailProduct(data.id)}
        className="product-main cursor-pointer block"
      >
        <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
          {style === "style-1" || style === "style-3" || style === "style-4" ? (
            <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
              {/* <div
                className={`add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative ${
                  wishlistState.wishlistArray.some(
                    (item) => item.id === data.id
                  )
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToWishlist();
                }}
              >
                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                  Add To Wishlist
                </div>
                {wishlistState.wishlistArray.some(
                  (item) => item.id === data.id
                ) ? (
                  <>
                    <Icon.Heart
                      size={18}
                      weight="fill"
                      className="text-white"
                    />
                  </>
                ) : (
                  <div>
                    <Icon.Heart size={18} />
                  </>
                )}
              </div> */}
            </div>
          ) : (
            <></>
          )}
          {/* image product */}
          <div className="product-img w-full h-full aspect-[3/4]">
            <Image
              src={`${
                imgProduk ? BASE_URL + "/" + imgProduk : "/images/logo.png"
              }`}
              width={500}
              height={500}
              priority={true}
              alt={data.product_nm || "Nama Produk"}
              className="w-full h-full object-cover duration-700"
            />
          </div>
          {/* botton */}
          <div className="list-action-icon flex items-center justify-center gap-2 absolute w-full bottom-3 z-[1] lg:hidden">
            <div
              className="quick-view-btn w-9 h-9 flex items-center justify-center rounded-lg duration-300 bg-white hover:bg-black hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                handleQuickviewOpen();
              }}
            >
              <Icon.Eye className="text-lg" />
            </div>
            <div
              className="add-cart-btn w-9 h-9 flex items-center justify-center rounded-lg duration-300 bg-white hover:bg-black hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
            >
              <Icon.ShoppingBagOpen className="text-lg" />
            </div>
          </div>
        </div>
        <div className="product-infor mt-4 lg:mb-7">
          <div className="product-sold sm:pb-4 pb-2">
            <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
              <div
                className={`progress-sold bg-red absolute left-0 top-0 h-full`}
                style={{ width: `${percentSold}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
              <div className="text-button-uppercase">
                <span className="text-secondary2 max-sm:text-xs">
                  Terjual:{" "}
                </span>
                <span className="max-sm:text-xs">{1}</span>
              </div>
              <div className="text-button-uppercase">
                <span className="text-secondary2 max-sm:text-xs">Stok: </span>
                <span className="max-sm:text-xs">
                  {data?.product_variant?.reduce(
                    (acc, item) => acc + item.stock,
                    data.stock
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="product-name text-title duration-300">
            {data.product_nm}
          </div>

          <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
            <div className="product-price text-title bg-green">
              {showRupiah(price)}
            </div>
            {/* {percentSale > 0 && (
              <>
                <div className="product-origin-price caption1 text-secondary2">
                  <del>harga asli</del>
                </div>
                <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                  -{percentSale}%
                </div>
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
