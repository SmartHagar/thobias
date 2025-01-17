/** @format */
"use client";
import { Suspense, useEffect, useState } from "react";

import ShowData from "./ShowData";
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import { useWelcomeContext } from "@/context/WelcomeContext";
import Searching from "./Searching";
import { useForm } from "react-hook-form";
import Form from "./form/Form";
import useVillage from "@/stores/crud/Village";
import VillageTypes from "@/types/Village";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};
// village
const Village = () => {
  // context
  const halaman = "Kelurahan";
  const { setWelcome } = useWelcomeContext();

  useEffect(() => {
    setWelcome(`Halaman ${halaman}`);
    return () => {};
  }, [setWelcome]);
  // store
  const { removeData } = useVillage();
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<VillageTypes | null>();

  const handleTambah = () => {
    setShowModal(true);
    setDtEdit(null);
  };

  const setEdit = (row: VillageTypes) => {
    setShowModal(true);
    setDtEdit(row);
  };

  const setDelete = async ({ id, isDelete }: Delete) => {
    setIdDel(id);
    if (isDelete) {
      const { data } = await removeData(idDel as number);
      toastShow({
        event: data,
      });
      setShowDelete(false);
    } else setShowDelete(true);
  };

  // hook form
  const { register, setValue, watch, control } = useForm();

  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <Toaster />
        <Form
          dtEdit={dtEdit ?? null}
          showModal={showModal}
          setShowModal={setShowModal}
          halaman={halaman}
        />
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data Village</p>
          <button className="btn btn-primary" onClick={handleTambah}>
            Tambah Data
          </button>
        </div>
      </div>

      <div className="mb-4">
        <Searching
          halaman={halaman}
          register={register}
          setValue={setValue}
          watch={watch}
          control={control}
        />
      </div>

      <Suspense>
        <ShowData setDelete={setDelete} setEdit={setEdit} />
      </Suspense>
    </div>
  );
};

export default Village;
