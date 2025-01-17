/**
 * eslint-disable @typescript-eslint/no-empty-object-type
 *
 * @format
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "../auth/login";
import VillageTypes from "@/types/Village";
// store village
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  sortby?: string;
  order?: string;
};

type Store = {
  dtVillage: {
    last_page: number;
    current_page: number;
    data: VillageTypes[];
  };

  setVillage: ({ page, limit, search, sortby, order }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  setShowVillage: (id: number | string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addData: (
    data: VillageTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;

  removeData: (
    id: number | string
  ) => Promise<{ status: string; data?: any; error?: any }>;

  updateData: (
    id: number | string,
    data: VillageTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;
};

const useVillage = create(
  devtools<Store>((set) => ({
    dtVillage: {
      last_page: 0,
      current_page: 0,
      data: [],
    },
    setVillage: async ({ page = 1, limit = 10, search, sortby, order }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/villages`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            sortby,
            order,
          },
        });
        set((state) => ({
          ...state,
          dtVillage: response.data.data,
        }));
        console.log({ response });
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response?.data,
        };
      }
    },
    setShowVillage: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/villages/${id}`,
          headers: { Authorization: `Bearer ${token}` },
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
          error: error.response?.data,
        };
      }
    },
    addData: async (row) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/villages`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtVillage: {
            last_page: prevState.dtVillage.last_page,
            current_page: prevState.dtVillage.current_page,
            data: [res.data.data, ...prevState.dtVillage.data],
          },
        }));
        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    removeData: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "delete",
          url: `/villages/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtVillage: {
            last_page: prevState.dtVillage.last_page,
            current_page: prevState.dtVillage.current_page,
            data: prevState.dtVillage.data.filter(
              (item: any) => item.id !== id
            ),
          },
        }));
        return {
          status: "berhasil hapus",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    updateData: async (id, row) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "PUT",
          url: `/villages/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtVillage: {
            last_page: prevState.dtVillage.last_page,
            current_page: prevState.dtVillage.current_page,
            data: prevState.dtVillage.data.map((item: any) => {
              if (item.id === id) {
                return {
                  ...item,
                  ...response.data.data,
                };
              } else {
                return item;
              }
            }),
          },
        }));
        return {
          status: "berhasil update",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
  }))
);

export default useVillage;
