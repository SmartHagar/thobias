/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import submitData from "@/services/submitData";
import useProducts from "@/stores/crud/Products";
import ProductsTypes from "@/types/Products";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: ProductsTypes | null;
  halaman: string;
};
// products
const Form = ({ showModal, setShowModal, dtEdit, halaman }: Props) => {
  // store
  const { addData, updateData } = useProducts();
  // state
  const [isLoading, setIsLoading] = useState(false);
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
    setValue("stock", "");
    setValue("price", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("product_nm", dtEdit.product_nm);
      setValue("price", dtEdit.price);
      setValue("stock", dtEdit.stock);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<ProductsTypes> = async (row) => {
    //  submit data
    // console.log({ row });
    // return;
    submitData({
      row,
      dtEdit,
      setIsLoading,
      setShowModal,
      addData,
      updateData,
      resetForm,
      toastShow,
    });
  };

  return (
    <ModalDefault
      title={`Form ${halaman}`}
      showModal={showModal}
      setShowModal={setShowModal}
      width="md:w-[50rem] lg:w-[65rem]"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDefault name="id" register={register} type="hidden" />
        <div className="grid grid-cols-8 gap-2 mb-4">
          <BodyForm
            register={register}
            errors={errors}
            dtEdit={dtEdit}
            control={control}
            watch={watch}
            setValue={setValue}
            showModal={showModal}
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
    </ModalDefault>
  );
};

export default Form;
