/** @format */
"use client";
import useLogin from "@/stores/auth/login";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const { cekToken } = useLogin();
  const router = useRouter();
  const getCek = async () => {
    const res = await cekToken();
    if (res?.error) {
      // redirect to login
      return router.push("/auth/login");
    } else {
      return router.push("/dashboard");
    }
  };

  useEffect(() => {
    getCek();
    console.log("pertama render");

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex absolute inset-0 bg-white min-h-screen h-screen justify-center items-center z-50">
      <span className="loading loading-dots loading-md" />
    </div>
  );
};

export default Home;
