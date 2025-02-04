/** @format */
"use client";
import { useMenuContext } from "@/context/MenuContext";
import { useEffect, useState } from "react";
import { useWelcomeContext } from "@/context/WelcomeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { BsBell } from "react-icons/bs";
import { useNotificationsContext } from "@/context/NotificationContext";
import useNotificationsApi from "@/stores/api/Notifications";
import NotificationsTypes from "@/types/NotificationType";
import showRupiah from "@/services/rupiah";

const HeaderAdmin = () => {
  const { isOpen, setIsOpen } = useMenuContext();
  const { welcome, setWelcome } = useWelcomeContext();
  const { dtNotifications } = useNotificationsContext();

  // state
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState<any>([]);
  // store
  const { setUpdate } = useNotificationsApi();
  // pathname
  const pathname = usePathname();
  // router
  const router = useRouter();

  // effect
  useEffect(() => {
    if (pathname === "/admin") {
      setWelcome("Selamat Datang Admin");
    } else {
      // split the pathname
      const path = pathname?.split("/");
      setWelcome(`Halaman ${path[path.length - 1]}`);
    }

    return () => {};
  }, [pathname, setWelcome]);

  // ketika pathname berubah
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);
  // console.log({ isOpen });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setUnreadNotifications(dtNotifications?.filter((item: any) => !item.read));
  }, [dtNotifications]);

  const handleNotification = () => {
    if (unreadNotifications?.length > 0) {
    }
    setIsNotificationOpen(!isNotificationOpen);
  };

  useEffect(() => {
    const unread = dtNotifications?.filter(
      (item: NotificationsTypes) => !item.read
    );
    setUnreadNotifications(unread);
  }, [dtNotifications]);

  const goToOrder = async (id: string) => {
    router.push("/orders");
    await setUpdate(id);
    setIsNotificationOpen(false);
  };
  console.log({ dtNotifications, unreadNotifications });

  return (
    <div className="flex justify-between lg:justify-center z-50 h-10  bg-linear">
      <h3 className="capitalize text-xl z-50 font-bold w-full text-center text-neutral pt-1">
        {welcome}
      </h3>
      <div className="absolute flex lg:justify-end lg:right-4 lg: left-4 top-2">
        <div className="cursor-pointer z-50" onClick={handleNotification}>
          {unreadNotifications?.length > 0 && (
            <div className="w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0"></div>
          )}
          <BsBell className="text-xl" />
        </div>
        {/* list notification */}
        <div
          className={`absolute grow top-8 w-96 max-h-[94vh] overflow-auto z-50 backdrop-blur select-none rounded-b-xl ${
            isNotificationOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <div className="bg-secondary/20">
            {dtNotifications?.map((item: NotificationsTypes, index: number) => {
              const data = JSON.parse(item.data);
              return (
                <div
                  key={index}
                  onClick={() => goToOrder(item.id)}
                  className={`${
                    item.read ? "bg-white" : "bg-secondary/10"
                  } cursor-pointer flex flex-row justify-between items-center p-1 pl-2 border-b border-primary`}
                >
                  <span className="text-sm">{data.nm_recipient}</span>
                  <span className="text-sm">
                    {showRupiah(item?.notifiable?.total_payment || 0)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <GiHamburgerMenu
        className="lg:hidden cursor-pointer z-50 select-none mr-4 self-center"
        onClick={handleClick}
      />
    </div>
  );
};

export default HeaderAdmin;
