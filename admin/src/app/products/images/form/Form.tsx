/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import submitData from "@/services/submitData";
import useProductImages from "@/stores/crud/ProductImages";
import ProductImagesTypes from "@/types/ProductImages";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: ProductImagesTypes | null;
  halaman: string;
  product_id: string;
};
// productImages
const Form = ({
  showModal,
  setShowModal,
  dtEdit,
  halaman,
  product_id,
}: Props) => {
  // store
  const { addData, updateData } = useProductImages();
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
  } = useForm<ProductImagesTypes>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("is_main", false);
    setValue("product_img", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("is_main", dtEdit.is_main);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<ProductImagesTypes> = async (row) => {
    row.product_id = product_id;
    row.is_main = row.is_main ? 1 : 0;
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
            <span className="loading loading-spinner loading-lg"></span>
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
