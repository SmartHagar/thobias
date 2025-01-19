/**
 * eslint-disable @typescript-eslint/no-empty-object-type
 *
 * @format
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
import ProductsTypes from "@/type/ProductsType";
// api products
type Props = {
  search?: string;
  limit?: number;
  page?: number;
  sortby?: string;
  order?: string;
  sub_category_id?: string;
};

type Store = {
  dtProducts?: {
    data: ProductsTypes[];
    total: number;
    current_page: number;
    last_page: number;
    per_page: number;
    to: number;
    from: number;
  };
  allProducts?: ProductsTypes[];
  showCategory?: ProductsTypes;
  setProducts: ({
    search,
    limit,
    page,
    sortby,
    order,
    sub_category_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setProductsAll: ({
    search,
    limit,
    page,
    sortby,
    order,
    sub_category_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowProducts: (id: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useProductsApi = create(
  devtools<Store>((set) => ({
    setProducts: async ({
      search,
      limit,
      page,
      sortby,
      order,
      sub_category_id,
    }) => {
      try {
        const response = await api({
          method: "get",
          url: `/products`,
          params: {
            search,
            limit,
            page,
            sortby,
            order,
            sub_category_id,
          },
        });
        set((state) => ({
          ...state,
          dtProducts: response.data.data,
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
    setProductsAll: async ({
      search,
      page,
      sortby,
      order,
      sub_category_id,
    }) => {
      try {
        const response = await api({
          method: "get",
          url: `/products/all`,
          params: {
            search,
            page,
            sortby,
            order,
            sub_category_id,
          },
        });
        set((state) => ({
          ...state,
          dtProducts: response.data.data,
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
    setShowProducts: async (id) => {
      try {
        const response = await api({
          method: "get",
          url: `/products/${id}`,
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

export default useProductsApi;
