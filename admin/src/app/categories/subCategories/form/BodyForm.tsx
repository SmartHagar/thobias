/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useCategories from "@/stores/crud/Categories";
import SubCategoriesTypes from "@/types/SubCategories";
import { FC, useCallback, useEffect, useState } from "react";
import { FieldErrors } from "react-hook-form";

// subCategories
type Props = {
  register: unknown;
  errors: FieldErrors<SubCategoriesTypes>;
  dtEdit: SubCategoriesTypes | null;
  control: unknown;
  watch: unknown;
  setValue: unknown;
  showModal: boolean;
};
const BodyForm: FC<Props> = ({ register, errors, showModal, control }) => {
  // store
  const { setCategories, dtCategories } = useCategories();
  // state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // fetch
  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    await setCategories({ page: 1, limit: 10 });
    setIsLoading(false);
  }, [setCategories]);

  // call fetch
  useEffect(() => {
    fetchCategories();
  }, [showModal]);

  return (
    <>
      {!isLoading && (
        <SelectFromDb
          label="Kategori"
          placeholder="Pilih Kategori"
          name="category_id"
          dataDb={dtCategories.data}
          body={["id", "category_nm"]}
          control={control}
          required
          errors={errors.category_id}
          addClass="lg:col-span-4 col-span-8 text-black relative"
          menuPortalTarget
        />
      )}
      <InputTextDefault
        label="Sub Kategori"
        name="sub_category_nm"
        register={register}
        errors={errors.sub_category_nm}
        required
        addClass="lg:col-span-4 col-span-8"
      />
    </>
  );
};

export default BodyForm;
