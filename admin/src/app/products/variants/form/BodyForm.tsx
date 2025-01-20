/** @format */
"use client";
import InputColor from "@/components/input/InputColor";
import InputFile from "@/components/input/InputFile";
import InputRupiah from "@/components/input/InputRupiah";
import InputTextDefault from "@/components/input/InputTextDefault";
import VariantsTypes from "@/types/Variants";
import { FC } from "react";
import { FieldErrors } from "react-hook-form";

// variants
type Props = {
  register: unknown;
  errors: FieldErrors<VariantsTypes>;
  dtEdit: VariantsTypes | null;
  control: unknown;
  watch: any;
  setValue: unknown;
  showModal: boolean;
};
const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  setValue,
  watch,
}) => {
  return (
    <>
      <InputColor
        label="Pilih Warna"
        name="color"
        register={register}
        errors={errors}
        addClass="col-span-8 lg:col-span-4"
        dtEdit={dtEdit?.color}
      />

      <InputTextDefault
        label="Ukuran"
        name="size"
        register={register}
        errors={errors.size}
        addClass="col-span-8 lg:col-span-4"
      />
      <InputTextDefault
        label="Stock"
        name="stock"
        register={register}
        errors={errors.stock}
        required
        type="number"
        min={1}
        addClass="col-span-8 lg:col-span-2"
      />
      <InputRupiah
        label="Harga"
        control={control}
        name="price"
        errors={errors.price}
        addClass="col-span-8  lg:col-span-6"
        required
        minLength={1}
      />
      {/* image */}
      <InputFile
        label="Gambar Varian"
        name="variant_img"
        register={register}
        accept="image/*"
        errors={errors.variant_img}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.variant_img}
        watch={watch}
      />
    </>
  );
};

export default BodyForm;
