/**
 * eslint-disable @typescript-eslint/no-empty-object-type
 *
 * @format
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// import useLogin from "../auth/login";
import CartsTypes from "@/type/CartsType";
import useLogin from "../auth/login";
// api carts
type Props = {
  product_variant_id?: string | null;
  product_id?: string;
  quantity?: number;
  user_id?: string;
  costumQuantity?: boolean;
  id?: string;
};

type Store = {
  dtCarts: {
    last_page: number;
    current_page: number;
    data: CartsTypes[];
  };
  setCarts: ({ user_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addCart: ({
    product_variant_id,
    product_id,
    quantity,
    costumQuantity,
    user_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  costumeQuantity: ({
    product_variant_id,
    product_id,
    quantity,
    costumQuantity,
    user_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  removeCarts: ({ user_id, id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const token = async () => {
  return await useLogin.getState().setToken();
};

const useCartsApi = create(
  devtools<Store>((set) => ({
    dtCarts: {
      last_page: 0,
      current_page: 0,
      data: [],
    },
    setCarts: async ({ user_id }) => {
      try {
        const response = await api({
          method: "get",
          url: `/carts`,
          headers: { Authorization: `Bearer ${await token()}` },
          params: { user_id },
        });
        set((state) => ({ ...state, dtCarts: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    addCart: async ({
      product_id,
      product_variant_id,
      quantity = 1,
      user_id,
    }) => {
      const row = {
        product_id,
        product_variant_id,
        quantity,
      };
      try {
        const response = await api({
          method: "POST",
          url: `/carts`,
          headers: { Authorization: `Bearer ${await token()}` },
          params: row,
        });
        // call set cart
        useCartsApi.getState().setCarts({ user_id });
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    costumeQuantity: async ({
      product_id,
      product_variant_id,
      quantity = 1,
      user_id,
    }) => {
      const row = {
        product_id,
        product_variant_id,
        quantity,
      };
      try {
        const response = await api({
          method: "POST",
          url: `/carts/costumeQuantity`,
          headers: { Authorization: `Bearer ${await token()}` },
          params: row,
        });
        // call set cart
        useCartsApi.getState().setCarts({ user_id });
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    removeCarts: async ({ user_id, id }) => {
      try {
        const response = await api({
          method: "delete",
          url: `/carts`,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Authorization: `Bearer ${await token()}`,
          },
          params: {
            user_id,
            id,
          },
        });
        //   call set cart
        useCartsApi.getState().setCarts({ user_id });
        return {
          status: "berhasil",
          data: response.data,
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

export default useCartsApi;
