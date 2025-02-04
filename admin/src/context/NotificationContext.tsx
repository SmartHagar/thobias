/** @format */
"use client";
import useNotificationsApi from "@/stores/api/Notifications";
import NotificationType from "@/types/NotificationType";
import { pusher } from "@/utils/pusher";
import React, { createContext, useContext, useEffect } from "react";

const NotificationContext = createContext<{
  dtNotifications: NotificationType[];
}>({
  dtNotifications: [],
});

const NotificationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // store
  const { dtNotifications, setNotificationsAll } = useNotificationsApi();
  useEffect(() => {
    setNotificationsAll({
      type: "new_order",
      notifiable: { status: "dibayar" },
    });
    console.log("Initializing Pusher connection..."); // Log inisialisasi

    // Log status koneksi Pusher
    pusher.connection.bind("connected", () => {
      console.log("✅ Connected to Pusher successfully");
    });

    pusher.connection.bind("error", (error: any) => {
      console.error("❌ Pusher connection error:", error);
    });

    console.log("Subscribing to 'orders' channel..."); // Log subscribe
    const orderChannel = pusher.subscribe("orders");

    // Log ketika berhasil subscribe
    orderChannel.bind("pusher:subscription_succeeded", () => {
      console.log("✅ Successfully subscribed to orders channel");
    });

    // Log ketika subscribe error
    orderChannel.bind("pusher:subscription_error", (error: any) => {
      console.error("❌ Subscription error:", error);
    });

    // Notifikasi pesanan baru
    orderChannel.bind("new_order", (data: any) => {
      console.log("New order:", data);
      setNotificationsAll({
        type: "new_order",
        notifiable: { status: "dibayar" },
      });
    });

    console.log("Current notifications:", dtNotifications);

    return () => {
      console.log("Cleaning up Pusher subscription...");
      pusher.unsubscribe("orders");
    };
  }, []);

  return (
    <NotificationContext.Provider value={{ dtNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;

export const useNotificationsContext = () => useContext(NotificationContext);
