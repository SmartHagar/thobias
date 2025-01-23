/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import submitData from "@/services/submitData";
import useProducts from "@/stores/crud/Products";
import ProductsTypes from "@/types/Products";
import { useSearchParams } from "next/navigation";

// products
const AddProduct = () => {
  // store
  const { addData, updateData, setShowProducts, showProduct } = useProducts();
  // state
  const [isLoading, setIsLoading] = useState(false);
  const [dtEdit, setDtEdit] = useState<ProductsTypes | null>(null);
  // useSearch
  const searchParams = useSearchParams();
  const productId = searchParams?.get("product_id") || "";

  // if productId call setShow
  useEffect(() => {
    if (productId) {
      setShowProducts(productId);
    } else {
      setDtEdit(null);
    }
  }, [productId, setShowProducts]);
  // if showProduct call setDtEdit
  useEffect(() => {
    if (showProduct) {
      setDtEdit(showProduct);
    }
  }, [showProduct]);
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<ProductsTypes>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("product_nm", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("product_nm", dtEdit.product_nm);
      setValue("sub_category_id", dtEdit.sub_category_id);
    } else {
      resetForm();
    }
  }, [dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<ProductsTypes> = async (row) => {
    //  submit data
    console.log({ row });
    // return;
    submitData({
      row,
      dtEdit,
      setIsLoading,
      addData,
      updateData,
      resetForm,
      toastShow,
    });
  };

  return (
    <section className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDefault name="id" register={register} type="hidden" />
        <div className="grid grid-cols-8 gap-8 mb-4">
          <BodyForm
            register={register}
            errors={errors}
            dtEdit={dtEdit}
            control={control}
            watch={watch}
            setValue={setValue}
          />
        </div>
        <div>
          {isLoading ? (
            <span className="loading loading-spinner text-primary"></span>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleSubmit(onSubmit)}
              type="submit"
            >
              Simpan
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
