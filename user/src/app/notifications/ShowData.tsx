/** @format */
"use client";
import useNotificationsApi from "@/store/api/Notifications";
import { momentId } from "@/utils/momentIndonesia";
import { useRouter } from "next/navigation";
import React from "react";

const ShowData = () => {
  // store
  const { dtNotifications } = useNotificationsApi();
  const { setUpdate } = useNotificationsApi();
  // router
  const router = useRouter();
  const goToAccount = async (id: string) => {
    router.push("/account?tab=orders");
    await setUpdate(id);
  };

  return (
    <div className="flex flex-col mx-4">
      {dtNotifications?.length > 0 &&
        dtNotifications?.map((item) => {
          const dtNotifiable = JSON.parse(item?.data);
          console.log({ dtNotifiable });
          const status = dtNotifiable?.status;
          const message =
            status === "selesai"
              ? "Anda telah menerima pesanan ada. Silahkan berikan Ulasan"
              : status === "dikirim"
              ? "Pesanan Anda Sedang Dalam Pengiriman. Silahkan Tunggu"
              : "Pesanan Anda Sedang Di Proses. Silahkan Tunggu";
          return (
            <div
              className={`mt-2 px-6 py-4 rounded-lg shadow w-full ${
                item.read ? "bg-white" : "bg-green"
              }`}
              key={item.id}
              onClick={() => {
                goToAccount(item.id);
              }}
            >
              <div className=" inline-flex items-center justify-between w-full">
                <div className="inline-flex items-center">
                  <h3 className="font-bold text-base text-gray-800 uppercase">
                    {status}
                  </h3>
                </div>
                <p className="text-xs text-gray-500">
                  {momentId(item.created_at).fromNow()}
                </p>
              </div>
              <p className="mt-1 text-sm">{message}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ShowData;
