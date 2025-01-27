/** @format */

import { BASE_URL } from "@/services/baseURL";
import showRupiah from "@/services/rupiah";
import OrderItemsTypes from "@/types/OrderItems";
import OrdersTypes from "@/types/Orders";
import Image from "next/image";
import React from "react";

type Props = {
  dtOrders: OrdersTypes;
};

const Order = ({ dtOrders }: Props) => {
  return (
    <div className="list_order">
      <div
        key={dtOrders.id}
        className="order_item border border-line rounded-lg box-shadow-xs"
      >
        <div className="list_prd px-5">
          {dtOrders.order_items.map((cart: OrderItemsTypes) => {
            const img = cart.product_variant_id
              ? cart.product_variant.variant_img
              : cart.product.product_image.find((item: any) => item.is_main)
                  ?.product_img;

            const price = cart.product_variant_id
              ? cart.product_variant.price
              : cart.product.price;
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
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-3 w-full">
                      <div className="flex items-center text-secondary2 capitalize">
                        {cart?.product_variant?.size}/
                        {cart?.product_variant?.color}
                      </div>
                      <span className="items-center text-xs">
                        X {cart.quantity}
                      </span>
                      <div className="cart-price text-title">
                        {showRupiah(price)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="discount-block py-1 flex justify-between border-b border-line">
          <div className="text-title">Ongkir</div>
          <div className="text-title">
            <span>{showRupiah(dtOrders.shipping_cost)}</span>
          </div>
        </div>
        <div className="ship-block py-1 flex justify-between border-b border-line">
          <div className="text-title">Belanja</div>
          <div className="text-title">{showRupiah(dtOrders.total_price)}</div>
        </div>
        <div className="total-cart-block py-1 flex justify-between">
          <div className="heading5">Total</div>
          <div className="heading5 total-cart">
            {showRupiah(dtOrders.total_payment)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
