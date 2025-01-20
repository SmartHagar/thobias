/** @format */

import InputCheck from "@/components/input/InputCheck";
import InputMultiFiles from "@/components/input/InputMultiFiles";
import ProductImagesTypes from "@/types/ProductImages";
import { FC } from "react";
import { FieldErrors } from "react-hook-form";

type Props = {
  register: any;
  errors: FieldErrors<ProductImagesTypes>;
  dtEdit: ProductImagesTypes | null;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
};
// productImages
const BodyForm: FC<Props> = ({ register, errors, setValue, watch, dtEdit }) => {
  console.log({ dtEdit });
  return (
    <>
      <div className="col-span-8 flex gap-1 items-center">
        <span>Gambar Utama?</span>
        <InputCheck
          value={dtEdit?.is_main}
          name="is_main"
          register={register}
          errors={errors.is_main}
          id={"is_main"}
        />
      </div>
      <InputMultiFiles
        label="Gambar"
        name="product_img"
        register={register}
        addClass="col-span-8"
        setValue={setValue}
        required={!dtEdit?.product_img}
        errors={errors.product_img}
        fileEdit={[dtEdit?.product_img]}
        initialValue={dtEdit?.product_img || ""}
        watch={watch}
        accept={"image/*"}
      />
    </>
  );
};

export default BodyForm;
