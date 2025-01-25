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
// api recipients

interface Props {
  user_id?: string;
}

type Store = {
  dtRecipients: RecipientsTypes[];
  showRecipient?: RecipientsTypes;
  setRecipients: ({ user_id }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setRecipientsAll: () => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowRecipients: (id: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useRecipientsApi = create(
  devtools<Store>((set) => ({
    dtRecipients: [],
    setRecipients: async ({ user_id }) => {
      try {
        const response = await api({
          method: "get",
          url: `/recipients`,
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
    setRecipientsAll: async () => {
      try {
        const response = await api({
          method: "get",
          url: `/recipients/all`,
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
  }))
);

export default useRecipientsApi;
