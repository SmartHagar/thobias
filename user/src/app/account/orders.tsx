/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModalReviewContext } from "@/context/ModalReviewContext";
import useOrdersApi from "@/store/api/Orders";
import { User } from "@/type";
import showRupiah from "@/services/rupiah";
import { BASE_URL, MIDTRANS_CLIENT_KEY } from "@/services/baseURL";
import OrdersTypes from "@/type/OrdersType";
import { useRouter } from "next/navigation";
import TimePay from "@/components/Other/TimePay";

interface Props {
  dtUser: {
    user: User;
  };
  activeTab?: string;
}
const Orders = ({ dtUser, activeTab }: Props) => {
  // context
  const { openReview } = useModalReviewContext();
  // router
  const router = useRouter();
  // store
  const { setOrdersAll, dtOrders } = useOrdersApi();
  // state
  const [activeOrders, setActiveOrders] = useState<string>("semua");
  const [snapLoaded, setSnapLoaded] = useState<boolean>(false);

  // useEffect
  useEffect(() => {
    if (activeTab === "orders" && dtUser.user.id) {
      setOrdersAll({ user_id: dtUser.user.id, status: activeOrders });
    }

    return () => {};
  }, [activeOrders, activeTab, dtUser.user.id, setOrdersAll]);

  useEffect(() => {
    // Memuat skrip Snap.js
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js"; // URL untuk sandbox atau production
    //  get MIDTRANS_CLIENT_KEY from .env
    script.setAttribute("data-client-key", MIDTRANS_CLIENT_KEY || "");
    script.onload = () => setSnapLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleQuickviewOpen = (order: any) => {
    openReview(order as any);
  };

  const handleActiveOrders = (order: string) => {
    setActiveOrders(order);
  };

  const openSnap = async (order: OrdersTypes) => {
    if (!snapLoaded) {
      alert("Snap.js is not loaded yet!");
      return;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    window.snap.pay(order.snap_token, {
      onSuccess: function (result: any) {
        console.log({ result });
        // Let the backend handle the redirect
      },
      onPending: function (result: any) {
        console.log({ result });
        // Let the backend handle the redirect
      },
      onError: function (result: any) {
        console.log({ result });
        // Let the backend handle the redirect
      },
      onClose: function () {
        router.push("/account?tab=orders&history_order=semua");
        console.log("user closed the popup without finishing payment");
      },
    });
  };

  return (
    <>
      <h6 className="heading6">Pesanan Saya</h6>
      <div className="w-full overflow-x-auto">
        <div className="menu-tab grid grid-cols-5 max-lg:w-[500px] border-b border-line mt-3">
          {["semua", "belum bayar", "dikirim", "selesai", "batal"].map(
            (item, index) => (
              <button
                key={index}
                className={`item relative px-3 py-2.5 text-secondary whitespace-nowrap text-center duration-300 hover:text-black border-b-2 ${
                  activeOrders === item
                    ? "active border-black"
                    : "border-transparent"
                }`}
                onClick={() => handleActiveOrders(item)}
              >
                {activeOrders === item && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 border-black border-b-2"
                  ></motion.span>
                )}
                <span className="relative text-button z-[1]">{item}</span>
              </button>
            )
          )}
        </div>
      </div>
      <div className="list_order">
        {dtOrders?.data?.map((order) => (
          <div
            key={order.id}
            className="order_item mt-5 border border-line rounded-lg box-shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-line">
              <div className="flex items-center gap-2">
                <strong className="text-title">Order ID:</strong>
                <strong className="order_number text-button uppercase">
                  {order.id}
                </strong>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-title">Order status:</strong>
                <span
                  className={`tag px-4 py-1.5 rounded-full bg-opacity-10 capitalize 
                  ${
                    order.shipping_status?.status === "dikirim"
                      ? "bg-purple text-purple"
                      : order?.status === "belum bayar"
                      ? "bg-yellow text-yellow"
                      : order?.shipping_status?.status === "selesai"
                      ? "bg-green text-green"
                      : "bg-red text-red"
                  } caption1 font-semibold`}
                >
                  {order?.shipping_status?.status || order.status}
                </span>
              </div>
            </div>
            <div className="list_prd px-5">
              {order.order_items.map((cart, index) => {
                const img = cart.product_variant_id
                  ? cart.product_variant.variant_img
                  : cart.product.product_image.find((item: any) => item.is_main)
                      ?.product_img;
                return (
                  <div
                    key={index}
                    className="prd_item flex flex-wrap items-center justify-between gap-3 border-b border-line"
                  >
                    <Link
                      href={"/product/detail?id=" + cart.product.id}
                      className="flex items-center gap-5"
                    >
                      <div className="bg-img flex-shrink-0 md:w-[100px] w-20 aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={`${BASE_URL}/${img}`}
                          width={1000}
                          height={1000}
                          alt={cart.product.product_nm}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="prd_name text-title">
                          {cart.product.product_nm}
                        </div>
                        <div className="caption1 text-secondary mt-2">
                          <span className="prd_size uppercase">
                            {cart?.product_variant?.size}
                          </span>
                          <span>/</span>
                          <span className="prd_color capitalize">
                            {cart?.product_variant?.color}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="discount-block py-1 flex justify-between border-b border-line">
              <div className="text-title">Ongkir</div>
              <div className="text-title">
                <span>{showRupiah(order.shipping_cost)}</span>
              </div>
            </div>
            <div className="ship-block py-1 flex justify-between border-b border-line">
              <div className="text-title">Belanja</div>
              <div className="text-title">{showRupiah(order.total_price)}</div>
            </div>
            <div className="total-cart-block py-1 flex justify-between">
              <div className="heading5">Total</div>
              <div className="heading5 total-cart">
                {showRupiah(order.total_payment)}
              </div>
            </div>
            {order.status === "belum bayar" && (
              <div className="ship-block py-1 flex justify-between border-b border-line">
                <div className="text-title">Sisa Waktu Pembayaran</div>
                <div className="text-title">
                  <TimePay order={order} />
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-4 p-5">
              {order.status === "belum bayar" && (
                <button className="button-main" onClick={() => openSnap(order)}>
                  Bayar sekarang
                </button>
              )}
              {order?.shipping_status?.status === "selesai" && (
                <button
                  className="button-main"
                  onClick={() => handleQuickviewOpen(order)}
                >
                  {order?.review?.length > 0 ? "Lihat Review" : "Beri Nilai"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
