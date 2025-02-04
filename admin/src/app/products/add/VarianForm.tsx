/** @format */

import InputColor from "@/components/input/InputColor";
import InputFile from "@/components/input/InputFile";
import InputRupiah from "@/components/input/InputRupiah";
import InputTextDefault from "@/components/input/InputTextDefault";
import ProductsTypes from "@/types/Products";
import React, { useEffect } from "react";
import { FieldErrors, useFieldArray } from "react-hook-form";
import { BsPlusCircle, BsXCircle } from "react-icons/bs";

type Props = {
  register: any;
  errors: FieldErrors<ProductsTypes>;
  dtEdit: ProductsTypes | null;
  control: any;
  watch: any;
  setValue: any;
  hasVariants: boolean;
};
const VarianForm = ({
  register,
  errors,
  dtEdit,
  control,
  watch,
  setValue,
  hasVariants,
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "product_variant",
  });

  const handleAddVariant = () => {
    append({
      color: "",
      size: "",
      price: "",
      stock: "",
      variant_img: "",
    });
  };

  // if hasVariants true append
  useEffect(() => {
    if (hasVariants) {
      handleAddVariant();
    } else {
      remove();
    }
  }, [hasVariants]);

  useEffect(() => {
    if (dtEdit) {
      for (let i = 0; i < dtEdit.product_variant.length; i++) {
        append({
          color: dtEdit.product_variant[i].color,
          size: dtEdit.product_variant[i].size,
          price: dtEdit.product_variant[i].price,
          stock: dtEdit.product_variant[i].stock,
          variant_img: dtEdit.product_variant[i].variant_img,
        });
      }
    }
  }, [dtEdit]);

  const handleRemoveVariant = (index: number) => {
    remove(index);
  };

  return (
    <section className="col-span-4 grid grid-cols-8 gap-4">
      {fields.map((field, index) => (
        <div
          className="grid grid-cols-8 gap-2 col-span-8 shadow-lg mb-4 relative pt-8"
          key={field.id}
        >
          {fields.length > 1 && (
            <BsXCircle
              className="absolute top-2 right-2 cursor-pointer text-xl"
              title="Tutup"
              onClick={() => handleRemoveVariant(index)}
            />
          )}

          <InputColor
            label="Pilih Warna"
            name={`product_variant.${index}.color`}
            register={register}
            errors={errors}
            addClass="col-span-8 lg:col-span-4"
            dtEdit={dtEdit?.product_variant[index]?.color}
          />

          <InputTextDefault
            label="Ukuran"
            name={`product_variant.${index}.size`}
            register={register}
            errors={errors?.product_variant?.[index]?.size}
            addClass="col-span-8 lg:col-span-4"
          />

          <InputTextDefault
            label="Stock"
            name={`product_variant.${index}.stock`}
            register={register}
            errors={errors?.product_variant?.[index]?.stock}
            required
            type="number"
            min={1}
            addClass="col-span-8 lg:col-span-2"
          />

          <InputRupiah
            label="Harga"
            control={control}
            name={`product_variant.${index}.price`}
            errors={errors?.product_variant?.[index]?.price}
            addClass="col-span-8 lg:col-span-6"
            required
            minLength={1}
          />

          <InputFile
            label="Gambar Varian"
            name={`product_variant.${index}.variant_img`}
            register={register}
            accept="image/*"
            errors={errors?.product_variant?.[index]?.variant_img}
            addClass="col-span-8"
            setValue={setValue}
            fileEdit={dtEdit?.product_variant?.[index]?.variant_img}
            watch={watch}
            required
          />
        </div>
      ))}

      {hasVariants && (
        <BsPlusCircle
          className="mr-2 text-2xl cursor-pointer"
          title="Tambah Varian"
          onClick={handleAddVariant}
        />
      )}
    </section>
  );
};

export default VarianForm;
