/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useSubCategories from "@/stores/crud/SubCategories";
import ProductsTypes from "@/types/Products";
import dynamic from "next/dynamic";
import { FC, useCallback, useEffect, useState } from "react";
import { FieldErrors } from "react-hook-form";

const RichTextEditor = dynamic(
  () => import("@/components/input/RichTextEditor"),
  { ssr: false }
);

// products
type Props = {
  register: unknown;
  errors: FieldErrors<ProductsTypes>;
  dtEdit: ProductsTypes | null;
  control: unknown;
  watch: unknown;
  setValue: unknown;
  showModal: boolean;
};
const BodyForm: FC<Props> = ({
  register,
  errors,
  showModal,
  control,
  dtEdit,
  setValue,
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
  }, [showModal]);

  return (
    <>
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
    </>
  );
};

export default BodyForm;
