/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { BsHouse } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { RiNotification2Line } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import useNotificationsApi from "@/store/api/Notifications";
import NotificationsTypes from "@/type/NotificationType";

const Menu = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [unreadNotifications, setUnreadNotifications] = useState<any>([]);
  // store
  const { dtNotifications } = useNotificationsApi();

  useEffect(() => {
    if (dtNotifications) {
      setUnreadNotifications(
        dtNotifications?.filter((item: any) => !item.read)
      );
    }
  }, [dtNotifications]);

  useEffect(() => {
    const unread = dtNotifications?.filter(
      (item: NotificationsTypes) => !item.read
    );
    setUnreadNotifications(unread);
  }, [dtNotifications]);

  return (
    <section className="bg-linear lg:hidden fixed bottom-0 left-0 right-0 h-16 z-50 grid grid-cols-4 gap-4">
      {/* home */}
      <div
        className={`flex items-center justify-center ${
          pathName === "/" ? "text-black" : "text-white"
        }`}
      >
        <div
          className="flex flex-col justify-center items-center  cursor-pointer"
          onClick={() => router.push("/")}
        >
          <BsHouse className="text-2xl" />
          <span className="text-sm">Beranda</span>
        </div>
      </div>
      {/* shop */}
      <div
        className={`flex items-center justify-center text-2xl ${
          pathName === "/products" ? "text-black" : "text-white"
        }`}
      >
        <div
          className="flex flex-col justify-center items-center  cursor-pointer"
          onClick={() => router.push("/products")}
        >
          <AiOutlineProduct className="text-2xl" />
          <span className="text-sm">Produk</span>
        </div>
      </div>
      {/* notification */}
      <div
        className={`flex items-center justify-center text-2xl ${
          pathName === "/notifications" ? "text-black" : "text-white"
        }`}
      >
        <div
          className="flex flex-col justify-center items-center relative cursor-pointer"
          onClick={() => router.push("/notifications")}
        >
          {unreadNotifications?.length > 0 && (
            <span
              className={`${
                pathName === "/notifications"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } absolute -top-2 right-2 text-sm w-5 h-5 flex items-center justify-center rounded-full`}
            >
              {unreadNotifications?.length}
            </span>
          )}

          <RiNotification2Line className="text-2xl" />
          <span className="text-sm">Notifikasi</span>
        </div>
      </div>
      {/* profile */}
      <div
        className={`flex items-center justify-center text-2xl ${
          pathName === "/account" ? "text-black" : "text-white"
        }`}
      >
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          onClick={() => router.push("/account?tab=dashboard")}
        >
          <GoPerson className="text-2xl" />
          <span className="text-sm">Profil</span>
        </div>
      </div>
    </section>
  );
};

export default Menu;
