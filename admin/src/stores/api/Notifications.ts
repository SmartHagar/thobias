/**
 * eslint-disable @typescript-eslint/no-empty-object-type
 *
 * @format
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
import NotificationsTypes from "@/types/NotificationType";
// api notifications

interface Props {
  type?: string;
  notifiable?: {
    status?: string;
  };
}

type Store = {
  dtNotifications: NotificationsTypes[];
  showSippingCost?: NotificationsTypes;
  setNotifications: () => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setNotificationsAll: ({ type, notifiable }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowNotifications: (id: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setUpdate: (id: string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useNotificationsApi = create(
  devtools<Store>((set) => ({
    dtNotifications: [],
    setNotifications: async () => {
      try {
        const response = await api({
          method: "get",
          url: `/notifications`,
        });
        set((state) => ({
          ...state,
          dtNotifications: response.data.data,
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
    setNotificationsAll: async ({ type, notifiable }) => {
      try {
        const response = await api({
          method: "get",
          url: `/notifications/all`,
          params: {
            type,
            notifiable,
          },
        });
        set((state) => ({
          ...state,
          dtNotifications: response.data.data,
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
    setShowNotifications: async (id) => {
      try {
        const response = await api({
          method: "get",
          url: `/notifications/${id}`,
        });
        set((state) => ({
          ...state,
          dtNotifications: response.data.data,
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
    setUpdate: async (id) => {
      try {
        const response = await api({
          method: "post",
          url: `/notifications/update/${id}`,
        });
        set((prevState) => ({
          ...prevState,
          dtNotifications: prevState.dtNotifications.map(
            (item: NotificationsTypes) => {
              if (item.id === id) {
                return {
                  ...item,
                  ...response.data.data,
                };
              } else {
                return item;
              }
            }
          ),
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

export default useNotificationsApi;
