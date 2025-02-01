/** @format */
"use client";
import { pusher } from "@/utils/pusher";
import React, { createContext, useContext, useEffect, useState } from "react";

const NotificationContext = createContext<{
  notifications: any[];
  markAsRead?: (id: number) => void;
}>({
  notifications: [],
  markAsRead: () => {},
});

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<any>([]);
  useEffect(() => {
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
    orderChannel.bind("new-order", (data: any) => {
      console.log("📦 Received new order event:", data);
      const newNotification = {
        id: data.id,
      };
      setNotifications((prev: any) => {
        console.log("Previous notifications:", prev);
        const updated = [newNotification, ...prev];
        console.log("Updated notifications:", updated);
        return updated;
      });
    });

    console.log("Current notifications:", notifications);

    return () => {
      console.log("Cleaning up Pusher subscription...");
      pusher.unsubscribe("orders");
    };
  }, []);

  console.log({ notifications });
  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;

export const useNotifications = () => useContext(NotificationContext);
