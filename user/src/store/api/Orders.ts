/** @format */
/**
 * eslint-disable @typescript-eslint/no-empty-object-type
 *
 * @format
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
import OrdersTypes from "@/type/OrdersType";
import useLogin from "../auth/login";
// api orders

interface Props {
  user_id?: string;
  status?: string;
}

type Store = {
  dtOrders: {
    last_page: number;
    current_page: number;
    data: OrdersTypes[];
  };
  showOrder?: OrdersTypes;
  setOrders: ({ user_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowOrders: (id: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setOrdersAll: ({ user_id, status }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const token = async () => {
  return await useLogin.getState().setToken();
};

const useOrdersApi = create(
  devtools<Store>((set) => ({
    dtOrders: {
      last_page: 0,
      current_page: 0,
      data: [],
    },

    setOrders: async ({ user_id }) => {
      try {
        const response = await api({
          method: "get",
          url: `/orders`,
          headers: { Authorization: `Bearer ${await token()}` },
          params: { user_id },
        });
        set((state) => ({
          ...state,
          dtOrders: response.data.data,
        }));
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

    setShowOrders: async (id) => {
      try {
        const response = await api({
          method: "get",
          headers: { Authorization: `Bearer ${await token()}` },
          url: `/orders/${id}`,
        });
        set((state) => ({
          ...state,
          showOrder: response.data.data,
        }));
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

    setOrdersAll: async ({ user_id, status }) => {
      try {
        const response = await api({
          method: "get",
          url: `/orders/all`,
          headers: { Authorization: `Bearer ${await token()}` },
          params: { user_id, status },
        });
        set((state) => ({
          ...state,
          dtOrders: response.data,
        }));
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

export default useOrdersApi;
