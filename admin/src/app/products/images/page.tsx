/** @format */
"use client";
import { Suspense, useEffect, useState } from "react";

import ShowData from "./ShowData";
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import { useWelcomeContext } from "@/context/WelcomeContext";
import Searching from "./Searching";
import { useForm } from "react-hook-form";
import useProductImages from "@/stores/crud/ProductImages";
import ProductImagesTypes from "@/types/ProductImages";
import Form from "./form/Form";
import useVariants from "@/stores/crud/Variants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};
// productImages
const ProductImages = () => {
  const searchParams = useSearchParams();
  const productId = searchParams?.get("variant_id") || "";
  // context
  const halaman = "Gambar Produk";
  const { setWelcome } = useWelcomeContext();
  // store
  const { removeData } = useProductImages();
  const { setShowVariants, showVariants } = useVariants();
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<ProductImagesTypes | null>();

  // getProduct
  useEffect(() => {
    setShowVariants(productId);
  }, [productId, setShowVariants]);

  console.log({ showVariants });

  useEffect(() => {
    setWelcome(
      `Halaman ${halaman} - ${showVariants?.product.product_nm} ${
        showVariants?.color || ""
      } ${showVariants?.size || ""}`
    );
    return () => {};
  }, [
    setWelcome,
    showVariants?.color,
    showVariants?.product.product_nm,
    showVariants?.size,
  ]);

  const handleTambah = () => {
    setShowModal(true);
    setDtEdit(null);
  };

  const setEdit = (row: ProductImagesTypes) => {
    setShowModal(true);
    setDtEdit(row);
  };

  const setDelete = async ({ id, isDelete }: Delete) => {
    setIdDel(id);
    if (isDelete) {
      const { data } = await removeData(idDel as number);
      toastShow({
        event: data,
      });
      setShowDelete(false);
    } else setShowDelete(true);
  };

  // hook form
  const { register, setValue, watch, control } = useForm();

  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <Toaster />
        <Form
          dtEdit={dtEdit ?? null}
          showModal={showModal}
          setShowModal={setShowModal}
          halaman={halaman}
          product_variant_id={productId}
        />
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
        <Link
          className="text-neutral underline hover:no-underline"
          href={`/admin/foods/${showVariants?.product_id}/variants`}
        >
          Kembali
        </Link>
        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data ProductImages</p>
          <button className="btn btn-primary" onClick={handleTambah}>
            Tambah Data
          </button>
        </div>
      </div>

      <div className="mb-4">
        <Searching
          halaman={halaman}
          register={register}
          setValue={setValue}
          watch={watch}
          control={control}
        />
      </div>

      <Suspense>
        <ShowData
          setDelete={setDelete}
          setEdit={setEdit}
          product_variant_id={productId}
        />
      </Suspense>
    </div>
  );
};

export default ProductImages;
