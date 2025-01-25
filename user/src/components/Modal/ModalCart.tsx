/** @format */

"use client";

import React, { useEffect, useCallback, useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalCartContext } from "@/context/ModalCartContext";
import useCartsApi from "@/store/api/Carts";
import useLogin from "@/store/auth/login";
import Image from "next/image";
import { BASE_URL } from "@/services/baseURL";
import showRupiah from "@/services/rupiah";
import CartsTypes from "@/type/CartsType";
import Checkout from "@/utils/Checkout";

const ModalCart = () => {
  const { isModalOpen, closeModalCart } = useModalCartContext();
  // state
  const [subTotal, setSubTotal] = useState(0);
  // store
  const { setCarts, dtCarts, costumeQuantity, removeCarts } = useCartsApi();
  const { setToken } = useLogin();
  // get data cart
  const getDtCarts = useCallback(async () => {
    const token = await setToken();
    setCarts(token);
  }, [setCarts, setToken]);
  // get data cart
  useEffect(() => {
    getDtCarts();
    return () => {};
  }, [getDtCarts]);

  const handleIncreaseQuantity = async (cart: CartsTypes) => {
    await costumeQuantity({
      product_id: cart?.product_id,
      product_variant_id: cart?.product_variant_id,
      quantity: cart.quantity + 1,
    });
  };

  const handleDecreaseQuantity = async (cart: CartsTypes) => {
    const decreaseQuantity = cart.quantity - 1;
    await costumeQuantity({
      product_id: cart?.product_id,
      product_variant_id: cart?.product_variant_id,
      quantity: decreaseQuantity,
    });
  };

  const removeFromCart = async ({
    id,
    user_id,
  }: {
    id: string;
    user_id: string;
  }) => {
    await removeCarts({ user_id, id });
  };

  // count price
  useEffect(() => {
    const prince = dtCarts.data.reduce((acc, item) => {
      return (
        acc +
        item?.quantity *
          (item.product_variant?.price || item.product?.price || 0)
      );
    }, 0);

    setSubTotal(prince);

    return () => {};
  }, [dtCarts.data]);
  console.log({ subTotal });

  return (
    <>
      <div className={`modal-cart-block`} onClick={closeModalCart}>
        <div
          className={`modal-cart-main flex ${isModalOpen ? "open" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="right cart-block md:w-1/2 w-full py-6 relative overflow-hidden">
            <div className="heading px-6 pb-3 flex items-center justify-between relative">
              <div className="heading5">Shopping Cart</div>
              <div
                className="close-btn absolute right-6 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                onClick={closeModalCart}
              >
                <Icon.X size={14} />
              </div>
            </div>
            <div className="list-cart px-6">
              {dtCarts.data.map((cart) => {
                const img = cart.product_variant_id
                  ? cart.product_variant.variant_img
                  : cart.product.product_image.find((item) => item.is_main)
                      ?.product_img;

                const price = cart.product_variant_id
                  ? cart.product_variant.price
                  : cart.product.price;

                const stock = cart.product_variant_id
                  ? cart.product_variant.stock
                  : cart.product.stock;

                const quantity = cart.quantity;

                return (
                  <div
                    key={cart.id}
                    className="item py-5 flex items-center justify-between gap-3 border-b border-line"
                  >
                    <div className="infor flex items-center gap-3 w-full">
                      <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={`${BASE_URL}/${img}`}
                          width={300}
                          height={300}
                          alt={cart.product.product_nm}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="name text-button">
                            {cart.product.product_nm}
                          </div>
                          <div
                            className="remove-cart-btn caption1 font-semibold text-red underline cursor-pointer"
                            onClick={() =>
                              removeFromCart({
                                id: cart.id,
                                user_id: cart.user_id,
                              })
                            }
                          >
                            Remove
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 mt-3 w-full">
                          <div className="flex items-center text-secondary2 capitalize">
                            {cart?.product_variant?.size}/
                            {cart?.product_variant?.color}
                          </div>

                          <div className="cart-price text-title">
                            {showRupiah(price)}
                          </div>
                        </div>
                        <div className="quantity-block md:p-3 max-md:py-1.5 max-md:px-3 flex items-center justify-between rounded-lg border border-line sm:w-[180px] w-[120px] flex-shrink-0">
                          <Icon.Minus
                            onClick={() => handleDecreaseQuantity(cart)}
                            className={`${
                              quantity === 1 ? "disabled" : ""
                            } cursor-pointer body1`}
                          />
                          <div className="body1 font-semibold">{quantity}</div>
                          <Icon.Plus
                            onClick={() => handleIncreaseQuantity(cart)}
                            className={`${
                              quantity >= stock ? "disabled" : ""
                            } cursor-pointer body1`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="footer-modal bg-white absolute bottom-0 left-0 w-full">
              <div className="flex items-center justify-between pt-6 px-6">
                <div className="heading5">Subtotal</div>
                <div className="heading5">{showRupiah(subTotal)}</div>
              </div>
              <div className="block-button text-center p-6">
                {dtCarts.data.length > 0 && (
                  <Checkout
                    closeModalCart={closeModalCart}
                    user_id={dtCarts?.data?.[0]?.user_id}
                  />
                )}
                <div
                  onClick={closeModalCart}
                  className="text-button-uppercase mt-4 text-center has-line-before cursor-pointer inline-block"
                >
                  Lanjut belanja
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCart;
