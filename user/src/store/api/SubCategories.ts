/**
 * eslint-disable @typescript-eslint/no-empty-object-type
 *
 * @format
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
import SubCategoriesTypes from "@/type/SubCategoriesType";
// api subCategories
type Props = {
  search?: string;
  limit?: number;
  page?: number;
  sortby?: string;
  order?: string;
  category_id?: string;
};

type Store = {
  dtSubCategories: SubCategoriesTypes[];
  showCategory?: SubCategoriesTypes;
  setSubCategories: ({ search, limit, page, sortby, order }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setSubCategoriesAll: ({
    search,
    limit,
    page,
    sortby,
    order,
    category_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowSubCategories: (id: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useSubCategoriesApi = create(
  devtools<Store>((set) => ({
    dtSubCategories: [],
    setSubCategories: async ({ search, limit, page, sortby, order }) => {
      try {
        const response = await api({
          method: "get",
          url: `/subCategories`,
          params: {
            search,
            limit,
            page,
            sortby,
            order,
          },
        });
        set((state) => ({
          ...state,
          dtSubCategories: response.data.data,
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
    setSubCategoriesAll: async ({
      search,
      page,
      sortby,
      order,
      category_id,
    }) => {
      try {
        const response = await api({
          method: "get",
          url: `/subCategories/all`,
          params: {
            search,
            page,
            sortby,
            order,
            category_id,
          },
        });
        set((state) => ({
          ...state,
          dtSubCategories: response.data.data,
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
    setShowSubCategories: async (id) => {
      try {
        const response = await api({
          method: "get",
          url: `/subCategories/${id}`,
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

export default useSubCategoriesApi;
