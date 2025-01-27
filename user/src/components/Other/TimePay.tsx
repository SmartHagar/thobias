/** @format */

"use client";
import { api } from "@/services/baseURL";
import OrdersTypes from "@/type/OrdersType";
import { momentId } from "@/utils/momentIndonesia";
import moment from "moment";
import React, { useEffect, useState } from "react";

type Props = {
  order: OrdersTypes;
};

const TimePay = ({ order }: Props) => {
  // state
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Menambahkan 120 menit ke waktu created_at
    const endTime = momentId(order?.created_at).add(60, "minutes");

    const interval = setInterval(() => {
      const now = momentId();
      const duration = moment.duration(endTime.diff(now));

      const timeFormatted = `${duration.hours()} jam, ${duration.minutes()} menit, ${duration.seconds()} detik`;
      setTimeLeft(timeFormatted);

      if (duration.asSeconds() <= 0) {
        clearInterval(interval);
        setTimeLeft("waktu pembayaran habis");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [order?.created_at]);

  // setPay false if time 0
  useEffect(() => {
    if (timeLeft === "waktu pembayaran habis") {
      //   cek status order
      if (order?.status === "belum bayar") {
        //    update status order
        api.post(`/orders/update/${order?.id}`, {
          status: "batal",
        });
      }
    }
  }, [order?.id, order?.status, timeLeft]);
  return <span className="capitalize">{timeLeft}</span>;
};

export default TimePay;
