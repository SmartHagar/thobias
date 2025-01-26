/** @format */

import React, { useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RecipientsTypes from "@/type/RecipientsType";
import useVillageApi from "@/store/api/Villages";
import useRecipientsApi from "@/store/api/Recipients";
import { User } from "@/type";
import toastShow from "@/utils/toast-show";

const registerSchema = yup.object().shape({
  nm_recipient: yup.string().required("Name harus diisi"),
  phone: yup.string().required("Phone harus diisi"),
  address: yup.string().required("Address harus diisi"),
  village_id: yup.string().required("Village harus diisi"),
});

interface Props {
  dtUser: {
    user: User;
  };
  activeTab?: string;
}

const Address = ({ dtUser, activeTab }: Props) => {
  // state
  const [activeAddress, setActiveAddress] = useState<string | null>("billing");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // store
  const { setVillageAll, dtVillage } = useVillageApi();
  const { setRecipients, dtRecipients, addData, updateData } =
    useRecipientsApi();

  // get village
  useEffect(() => {
    if (activeTab === "address") {
      setVillageAll();
      setRecipients({
        user_id: dtUser.user.id,
      });
    }
  }, [activeTab, dtUser.user.id, setRecipients, setVillageAll]);

  const handleActiveAddress = (order: string) => {
    setActiveAddress((prevOrder) => (prevOrder === order ? null : order));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RecipientsTypes>({
    resolver: yupResolver(registerSchema) as any,
    mode: "onChange",
  });

  useEffect(() => {
    if (dtRecipients?.data?.[0]) {
      setValue("nm_recipient", dtRecipients?.data?.[0]?.nm_recipient);
      setValue("phone", dtRecipients?.data?.[0]?.phone);
      setValue("address", dtRecipients?.data?.[0]?.address);
      setValue("village_id", dtRecipients?.data?.[0]?.village_id);
    }
  }, [dtRecipients, setValue]);

  const onSubmit: SubmitHandler<RecipientsTypes> = async (row) => {
    setIsLoading(true);
    const isUpdate = dtRecipients?.data?.[0]?.id;
    row.user_id = dtUser.user.id;
    row.is_active = true;
    let res;
    if (!isUpdate) {
      res = await addData(row);
    } else {
      res = await updateData(dtRecipients?.data?.[0]?.id as string, row);
    }
    console.log({ res });
    toastShow({
      event: {
        type: res.data.type,
        message: res.data.message,
      },
    });
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          defaultValue={dtRecipients?.data?.[0]?.id}
          name="id"
          hidden
        />
        <button
          type="button"
          className={`tab_btn flex items-center justify-between w-full pb-1.5 border-b border-line ${
            activeAddress === "billing" ? "active" : ""
          }`}
          onClick={() => handleActiveAddress("billing")}
        >
          <strong className="heading6">Form penerima</strong>
          <Icon.CaretDown className="text-2xl ic_down duration-300" />
        </button>
        <div
          className={`form_address ${
            activeAddress === "billing" ? "block" : "hidden"
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-4 gap-y-5 mt-5">
            <div className="first-name">
              <label htmlFor="billingFirstName" className="caption1 capitalize">
                Nama<span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingFirstName"
                type="text"
                defaultValue={dtRecipients?.data?.[0]?.nm_recipient}
                {...register("nm_recipient", { required: true })}
              />
              {errors.nm_recipient && (
                <span className="text-red text-sm">
                  {errors.nm_recipient.message}
                </span>
              )}
            </div>
            <div className="">
              <label htmlFor="select-filter" className="caption1 capitalize">
                Kecamatan-Kelurahan<span className="text-red">*</span>
              </label>
              <div className="select-block relative">
                <select
                  id="select-filter"
                  className="caption1 w-full py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line"
                  {...register("village_id", { required: true })}
                >
                  <option value="">Pilih Kecamatan-Kelurahan</option>
                  {dtVillage.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.sub_district.sub_district_nm}-{item.village_nm}
                      </option>
                    );
                  })}
                </select>
              </div>
              {errors.village_id && (
                <span className="text-red text-sm">
                  {errors.village_id.message}
                </span>
              )}
            </div>

            <div className="phone">
              <label htmlFor="billingPhone" className="caption1 capitalize">
                No. HP <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingPhone"
                type="text"
                defaultValue={dtRecipients?.data?.[0]?.phone || ""}
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-red text-sm">{errors.phone.message}</span>
              )}
            </div>

            <div className="street">
              <label htmlFor="billingStreet" className="caption1 capitalize">
                Alamat Lengkap <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingStreet"
                type="text"
                defaultValue={dtRecipients?.data?.[0]?.address || ""}
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className="text-red text-sm">
                  {errors.address.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="block-button lg:mt-10 mt-6">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <button className="button-main">
              {dtRecipients?.data?.[0]?.id ? "Ubah" : "Simpan"}
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Address;
