/** @format */
"use client";
import { BASE_URL, MIDTRANS_CLIENT_KEY } from "@/services/baseURL";
import showRupiah from "@/services/rupiah";
import useCartsApi from "@/store/api/Carts";
import useRecipientsApi from "@/store/api/Recipients";
import useOrders from "@/store/crud/Orders";
import OrdersTypes from "@/type/OrdersType";
import RecipientsTypes from "@/type/RecipientsType";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Checkout = () => {
  const { setCarts, dtCarts } = useCartsApi();
  const { setRecipients, dtRecipients } = useRecipientsApi();
  const { addData } = useOrders();
  // state
  const [subTotal, setSubTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [snapLoaded, setSnapLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //   router
  const router = useRouter();
  //   get recipients
  useEffect(() => {
    if (dtCarts?.data[0]?.user_id) {
      setRecipients({
        user_id: dtCarts?.data[0]?.user_id,
      });
    }
  }, [dtCarts.data, setRecipients]);

  useEffect(() => {
    const prince = dtCarts.data.reduce((acc, item) => {
      return (
        acc +
        item?.quantity *
          (item.product_variant?.price || item.product?.price || 0)
      );
    }, 0);

    setSubTotal(prince);
    if (dtCarts?.data.length === 0) {
      setTimeout(() => {
        router.push("/account");
      }, 3000);
    }

    return () => {};
  }, [dtCarts.data]);

  useEffect(() => {
    const shipping = dtRecipients?.data?.[0]?.village?.shipping_cost || 0;
    setShippingCost(shipping);

    return () => {};
  }, [dtRecipients.data]);

  // useEffect
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

  const handleSubmit = async (recipient: RecipientsTypes) => {
    setIsLoading(true);

    const total_payment = subTotal + shippingCost;

    const row = {
      user_id: recipient?.user_id,
      village_id: recipient?.village_id,
      nm_recipient: recipient?.nm_recipient,
      phone: recipient?.phone,
      address: recipient?.address,
      shipping_cost: shippingCost,
      total_price: subTotal,
      total_payment,
      status: "belum bayar",
      carts: dtCarts.data,
    };
    const res = await addData(row);
    console.log({ res });
    if (res.status === "success") {
      handlePayment(res.data.data);
      await setCarts({ user_id: recipient?.user_id });
      // router.push("/orders");
    }
    setIsLoading(false);
  };
  const handlePayment = async (order: OrdersTypes) => {
    if (!snapLoaded) {
      alert("Snap.js is not loaded yet!");
      return;
    }
    const response = await axios.post(`${BASE_URL}/api/payment`, {
      order_id: order.id,
    });
    const snapToken = response.data;
    // Gunakan snapToken untuk membuka Snap popup
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    window.snap.pay(snapToken, {
      onSuccess: function (result: any) {
        /* Handle success */
        console.log({ result });
        router.push("/account?history_order=success");
      },
      onPending: function (result: any) {
        /* Handle pending */
        console.log({ result });
        router.push("/account?history_order=pending");
      },
      onError: function (result: any) {
        /* Handle error */
        console.log({ result });
        router.push("/account?history_order=error");
      },
      onClose: function () {
        /* Handle when user close the popup without finishing payment */
        console.log("user closed the popup");
        router.push("/account?history_order=close");
      },
    });
  };

  const goToOrder = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "button-main mr-2",
        cancelButton: "button-main bg-secondary",
      },
      buttonsStyling: false,
    });
    withReactContent(swalWithBootstrapButtons)
      .fire({
        title: "Buat Pesanan?",
        text: "Setelah Anda membuat pesanan, Anda tidak dapat mengubahnya.",
        showCancelButton: true,
        confirmButtonText: "Buat",
        cancelButtonText: "Batal",
      })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          handleSubmit(dtRecipients?.data?.[0]);
        }
      });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <section className="cart-block md:py-20 py-10">
      <div className="container">
        <div className="heading5 pb-3">Checkout</div>
        <div className="list-product-checkout">
          {dtCarts.data.length < 1 ? (
            <p className="text-button pt-3">No product in cart</p>
          ) : (
            dtCarts.data.map((cart) => {
              const img = cart.product_variant_id
                ? cart.product_variant.variant_img
                : cart.product.product_image.find((item) => item.is_main)
                    ?.product_img;

              const price = cart.product_variant_id
                ? cart.product_variant.price
                : cart.product.price;

              return (
                <div
                  key={cart.id}
                  className="item flex items-center justify-between w-full pb-5 border-b border-line gap-6 mt-5"
                >
                  <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={`${BASE_URL}/${img}`}
                      width={500}
                      height={500}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="name text-title">
                        {cart.product.product_nm}
                      </div>
                      <div className="caption1 text-secondary mt-2">
                        <span className="size capitalize">
                          {cart?.product_variant?.size}
                        </span>
                        <span>/</span>
                        <span className="color capitalize">
                          {cart?.product_variant?.color}
                        </span>
                      </div>
                    </div>
                    <div className="text-title">
                      <span className="quantity">{cart.quantity}</span>
                      <span className="px-1">x</span>
                      <span>{showRupiah(price)}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="discount-block py-5 flex justify-between border-b border-line">
          <div className="text-title">Ongkir</div>
          <div className="text-title">
            <span>{showRupiah(shippingCost)}</span>
          </div>
        </div>
        <div className="ship-block py-5 flex justify-between border-b border-line">
          <div className="text-title">Belanja</div>
          <div className="text-title">{showRupiah(subTotal)}</div>
        </div>
        <div className="total-cart-block pt-5 flex justify-between">
          <div className="heading5">Total</div>
          <div className="heading5 total-cart">
            {showRupiah(subTotal + shippingCost)}
          </div>
        </div>
        <button
          type="button"
          className="button-main w-full text-center uppercase mt-6"
          onClick={goToOrder}
        >
          Buat Pesanan
        </button>
      </div>
    </section>
  );
};

export default Checkout;
