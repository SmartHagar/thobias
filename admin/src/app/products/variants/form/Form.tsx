/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import submitData from "@/services/submitData";
import VariantsTypes from "@/types/Variants";
import useVariants from "@/stores/crud/Variants";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: VariantsTypes | null;
  halaman: string;
  productId: string;
};
// variants
const Form = ({
  showModal,
  setShowModal,
  dtEdit,
  halaman,
  productId,
}: Props) => {
  // store
  const { addData, updateData } = useVariants();
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
  } = useForm<VariantsTypes>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("color", "");
    setValue("size", "");
    setValue("price", 0);
    setValue("stock", 1);
    setValue("variant_img", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("color", dtEdit.color);
      setValue("size", dtEdit.size);
      setValue("price", dtEdit.price);
      setValue("stock", dtEdit.stock);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<VariantsTypes> = async (row) => {
    row.product_id = productId;
    console.log({ row });
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
            <span className="loading loading-spinner loading-md"></span>
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
