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
import RecipientsTypes from "@/type/RecipientsType";
import useLogin from "../auth/login";
// api recipients

interface Props {
  user_id?: string;
}

type Store = {
  dtRecipients: {
    last_page: number;
    current_page: number;
    data: RecipientsTypes[];
  };
  showRecipient?: RecipientsTypes;
  setRecipients: ({ user_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowRecipients: (id: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addData: (
    data: RecipientsTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;

  removeData: (
    id: number | string
  ) => Promise<{ status: string; data?: any; error?: any }>;

  updateData: (
    id: number | string,
    data: RecipientsTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;
};

const token = async () => {
  return await useLogin.getState().setToken();
};

const useRecipientsApi = create(
  devtools<Store>((set) => ({
    dtRecipients: {
      last_page: 0,
      current_page: 0,
      data: [],
    },

    setRecipients: async ({ user_id }) => {
      try {
        const response = await api({
          method: "get",
          url: `/recipients`,
          headers: { Authorization: `Bearer ${await token()}` },
          params: { user_id },
        });
        set((state) => ({
          ...state,
          dtRecipients: response.data.data,
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

    setShowRecipients: async (id) => {
      try {
        const response = await api({
          method: "get",
          headers: { Authorization: `Bearer ${await token()}` },
          url: `/recipients/${id}`,
        });
        set((state) => ({
          ...state,
          showRecipient: response.data.data,
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

    addData: async (row) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await api({
          method: "post",
          url: `/recipients`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtRecipients: {
            last_page: prevState.dtRecipients.last_page,
            current_page: prevState.dtRecipients.current_page,
            data: [res.data.data, ...prevState.dtRecipients.data],
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
        const res = await api({
          method: "delete",
          url: `/recipients/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtRecipients: {
            last_page: prevState.dtRecipients.last_page,
            current_page: prevState.dtRecipients.current_page,
            data: prevState.dtRecipients.data.filter(
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
        const response = await api({
          method: "PUT",
          url: `/recipients/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtRecipients: {
            last_page: prevState.dtRecipients.last_page,
            current_page: prevState.dtRecipients.current_page,
            data: prevState.dtRecipients.data.map((item: any) => {
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

export default useRecipientsApi;
