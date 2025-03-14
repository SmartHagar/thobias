/**
 * eslint-disable @typescript-eslint/no-empty-object-type
 *
 * @format
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
import ShippingCostsTypes from "@/types/Village";
// api shippingCosts

type Store = {
  dtShippingCosts: ShippingCostsTypes[];
  showSippingCost?: ShippingCostsTypes;
  setShippingCosts: () => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShippingCostsAll: () => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowShippingCosts: (id: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useShippingCostsApi = create(
  devtools<Store>((set) => ({
    dtShippingCosts: [],
    setShippingCosts: async () => {
      try {
        const response = await api({
          method: "get",
          url: `/shippingCosts`,
        });
        set((state) => ({
          ...state,
          dtShippingCosts: response.data.data,
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
    setShippingCostsAll: async () => {
      try {
        const response = await api({
          method: "get",
          url: `/shippingCosts/all`,
        });
        set((state) => ({
          ...state,
          dtShippingCosts: response.data.data,
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
    setShowShippingCosts: async (id) => {
      try {
        const response = await api({
          method: "get",
          url: `/shippingCosts/${id}`,
        });
        set((state) => ({
          ...state,
          showSippingCost: response.data.data,
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

export default useShippingCostsApi;
