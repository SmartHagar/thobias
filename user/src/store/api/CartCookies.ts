/**
 * eslint-disable @typescript-eslint/no-empty-object-type
 *
 * @format
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import CartsTypes from "@/type/CartsType";
import Cookies from "js-cookie";
// api carts
type Props = {
  product_variant_id?: string | null;
  product_id?: string;
  quantity?: number;
  costumQuantity?: boolean;
};

type Store = {
  dtCartsCookies: CartsTypes[];

  setCartCookies: () => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addCartCookies: ({
    product_variant_id,
    product_id,
    quantity,
    costumQuantity,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  removeCartCookies: ({ product_variant_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useCartCookies = create(
  devtools<Store>((set) => ({
    dtCartsCookies: [],
    setCartCookies: async () => {
      try {
        // get data cart from cookies
        const cart = Cookies.get("cart");
        if (cart) {
          const data = JSON.parse(cart);

          set((state) => ({
            ...state,
            dtCartsCookies: data,
          }));
        }
        return {
          status: "berhasil",
          //   data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    addCartCookies: async ({
      product_id,
      product_variant_id,
      quantity = 1,
    }) => {
      try {
        // Ambil data keranjang dari cookies
        const existingCart = Cookies.get("cart")
          ? JSON.parse(Cookies.get("cart") || "[]")
          : [];

        // Konversi ke array jika bukan array
        const cartItems = Array.isArray(existingCart)
          ? existingCart
          : [existingCart];

        // Cari item yang sudah ada di keranjang
        const existingItemIndex = cartItems.findIndex(
          (item) =>
            item.product_id === product_id &&
            (product_variant_id === null
              ? item.product_variant_id === null
              : item.product_variant_id === product_variant_id)
        );

        if (existingItemIndex !== -1) {
          // Jika item sudah ada, tambahkan quantity
          cartItems[existingItemIndex].quantity += quantity;
        } else {
          // Jika tidak ada, tambahkan item baru
          cartItems.push({
            product_id,
            product_variant_id,
            quantity,
          });
        }

        // Simpan kembali ke cookies
        Cookies.set("cart", JSON.stringify(cartItems));

        // Update state
        useCartCookies.getState().setCartCookies();
        return {
          status: "berhasil",
          //   data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    removeCartCookies: async ({ product_variant_id, product_id }) => {
      console.log({ product_variant_id, product_id });
      try {
        // remove data cart from cookies
        useCartCookies.getState().setCartCookies();
        return {
          status: "berhasil",
          //   data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useCartCookies;
