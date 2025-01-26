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
import VillageTypes from "@/type/VillageType";
// api village

type Store = {
  dtVillage: VillageTypes[];
  showCategory?: VillageTypes;
  setVillage: () => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setVillageAll: () => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowVillage: (id: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useVillageApi = create(
  devtools<Store>((set) => ({
    dtVillage: [],
    setVillage: async () => {
      try {
        const response = await api({
          method: "get",
          url: `/villages`,
        });
        set((state) => ({
          ...state,
          dtVillage: response.data.data,
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
    setVillageAll: async () => {
      try {
        const response = await api({
          method: "get",
          url: `/villages/all`,
        });
        set((state) => ({
          ...state,
          dtVillage: response.data.data,
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
    setShowVillage: async (id) => {
      try {
        const response = await api({
          method: "get",
          url: `/villages/${id}`,
        });
        set((state) => ({
          ...state,
          showCategory: response.data.data,
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

export default useVillageApi;
