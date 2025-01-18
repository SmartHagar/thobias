/** @format */
"use client";
import React from "react";
import { BsHouse } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { RiNotification2Line } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Menu = () => {
  const router = useRouter();
  return (
    <section className="bg-linear lg:hidden fixed bottom-0 left-0 right-0 h-16 z-50 grid grid-cols-4 gap-4">
      {/* home */}
      <div className={`flex items-center justify-center text-black`}>
        <div className="flex flex-col justify-center items-center">
          <BsHouse className="text-2xl" onClick={() => router.push("/")} />
          <span className="text-sm">Beranda</span>
        </div>
      </div>
      {/* shop */}
      <div className={`flex items-center justify-center text-2xl text-white`}>
        <div className="flex flex-col justify-center items-center">
          <AiOutlineProduct
            className="text-2xl"
            onClick={() => router.push("/")}
          />
          <span className="text-sm">Produk</span>
        </div>
      </div>
      {/* notification */}
      <div className={`flex items-center justify-center text-2xl text-white `}>
        <div className="flex flex-col justify-center items-center relative">
          <span className="absolute -top-2 right-2 text-sm w-5 h-5 flex items-center justify-center bg-black rounded-full">
            20
          </span>
          <RiNotification2Line
            className="text-2xl"
            onClick={() => router.push("/")}
          />
          <span className="text-sm">Notofikasi</span>
        </div>
      </div>
      {/* profile */}
      <div className={`flex items-center justify-center text-2xl text-white`}>
        <div className="flex flex-col justify-center items-center">
          <GoPerson className="text-2xl" onClick={() => router.push("/")} />
          <span className="text-sm">Profil</span>
        </div>
      </div>
    </section>
  );
};

export default Menu;
