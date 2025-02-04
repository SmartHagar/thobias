/** @format */

import useCartsApi from "@/store/api/Carts";
import useLogin from "@/store/auth/login";
import React from "react";
import { Toaster } from "react-hot-toast";
import toastShow from "./toast-show";
import { useRouter } from "next/navigation";

type Props = {
  selectedVariantOrProduct: {
    product_id: string;
    product_variant_id: string;
  };
  quantity: number;
};

const AddToCart = ({ selectedVariantOrProduct, quantity }: Props) => {
  const { cekToken } = useLogin();
  const { addCart } = useCartsApi();
  // router
  const router = useRouter();
  const handleAddToCart = async () => {
    if (!selectedVariantOrProduct) {
      return toastShow({
        event: {
          type: "error",
          message: "Pilih ukuran dan warna terlebih dahulu",
        },
      });
    }
    // cek login
    const token = await cekToken();
    if (token?.error) {
      toastShow({
        event: {
          type: "error",
          message: "Silahkan login terlebih dahulu",
        },
      });
      return router.push("/account");
    }

    const res = await addCart({
      product_id: selectedVariantOrProduct?.product_id,
      product_variant_id: selectedVariantOrProduct?.product_variant_id,
      quantity,
    });
    if (res.status === "berhasil") {
      toastShow({
        event: {
          type: "success",
          message: "Berhasil menambahkan ke keranjang",
        },
      });
    }
    return res;
  };

  return (
    <>
      <Toaster />
      <div
        onClick={handleAddToCart}
        className="button-main w-full text-center bg-white text-black border border-black"
      >
        Tambahkan Keranjang
      </div>
    </>
  );
};

export default AddToCart;
