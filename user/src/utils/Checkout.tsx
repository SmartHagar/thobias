/** @format */

"use client";
import useRecipientsApi from "@/store/api/Recipients";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import toastShow from "./toast-show";

type Props = {
  closeModalCart: () => void;
  user_id: any;
};

const Checkout = ({ closeModalCart, user_id }: Props) => {
  const router = useRouter();
  // store
  const { setRecipients, dtRecipients } = useRecipientsApi();
  useEffect(() => {
    setRecipients({ user_id });
  }, []);

  const goToCheckout = () => {
    if (dtRecipients.data.length > 0) {
      router.push("/checkout");
      closeModalCart();
    } else {
      toastShow({
        event: {
          type: "error",
          message: "Silahkan tambahkan alamat terlebih dahulu",
        },
      });
      router.push("/account?tab=address");
      closeModalCart();
    }
  };
  return (
    <>
      <Toaster />
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="button-main w-full text-center uppercase"
          onClick={goToCheckout}
        >
          Check Out
        </button>
      </div>
    </>
  );
};

export default Checkout;
