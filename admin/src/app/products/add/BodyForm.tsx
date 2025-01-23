/** @format */
"use client";
import InputRupiah from "@/components/input/InputRupiah";
import InputTextDefault from "@/components/input/InputTextDefault";
import InputToggle from "@/components/input/InputToggle";
import SelectFromDb from "@/components/select/SelectFromDB";
import useSubCategories from "@/stores/crud/SubCategories";
import ProductsTypes from "@/types/Products";
import dynamic from "next/dynamic";
import { FC, useCallback, useEffect, useState } from "react";
import { FieldErrors } from "react-hook-form";
import VarianForm from "./VarianForm";

const RichTextEditor = dynamic(
  () => import("@/components/input/RichTextEditor"),
  { ssr: false }
);

// products
type Props = {
  register: any;
  errors: FieldErrors<ProductsTypes>;
  dtEdit: ProductsTypes | null;
  control: any;
  watch: any;
  setValue: any;
};
const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  setValue,
  watch,
}) => {
  // store
  const { setSubCategories, dtSubCategories } = useSubCategories();
  // state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // fetch
  const fetchSubCategories = useCallback(async () => {
    setIsLoading(true);
    await setSubCategories({ page: 1, limit: 10 });
    setIsLoading(false);
  }, [setSubCategories]);

  // call fetch
  useEffect(() => {
    fetchSubCategories();
  }, []);

  const hasVariants = watch("has_variants");

  useEffect(() => {
    if (hasVariants) {
      setValue("stock", 0);
      setValue("price", 0);
    } else {
      setValue("stock", 1);
      setValue("price", 0);
    }
  }, [hasVariants, setValue]);

  return (
    <>
      {/* kotak 1 */}
      <div
        className={`${
          hasVariants ? "col-span-4 h-fit" : "col-span-8"
        }  h-auto grid grid-cols-8 gap-2`}
      >
        {!isLoading && (
          <SelectFromDb
            label="Sub Kategori"
            placeholder="Pilih Sub Kategori"
            name="sub_category_id"
            dataDb={dtSubCategories.data}
            body={["id", "category.category_nm", "sub_category_nm"]}
            control={control}
            required
            errors={errors.sub_category_id}
            addClass="col-span-8 text-black relative"
            menuPortalTarget
          />
        )}
        <InputTextDefault
          label="Nama Produk"
          name="product_nm"
          register={register}
          errors={errors.product_nm}
          required
          addClass="col-span-8"
        />
        <RichTextEditor
          control={control}
          name="product_desc"
          label="Deskripsi"
          addClass="col-span-8"
          errors={errors.product_desc}
          initialValue={dtEdit?.product_desc || ""}
          setValue={setValue}
        />
        <InputToggle
          label="Memiliki Varian"
          name="has_variants"
          register={register}
          required={true}
          errors={errors.has_variants}
          defaultChecked={false}
          addClass="col-span-8"
        />

        {/* Non-variant Product Details */}
        {!hasVariants && (
          <>
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
          </>
        )}
      </div>
      <VarianForm
        register={register}
        errors={errors}
        control={control}
        dtEdit={dtEdit}
        watch={watch}
        setValue={setValue}
        hasVariants={hasVariants}
      />
    </>
  );
};

export default BodyForm;
