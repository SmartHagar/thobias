/** @format */
"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useLogin from "@/stores/auth/login";

const Auth = () => {
  // state
  const [isLoading, setIsLoading] = useState(true);
  // pathname
  const pathname = usePathname();
  // router
  const router = useRouter();
  const { cekToken } = useLogin();
  const getCek = async () => {
    const res = await cekToken();
    if (res?.error) {
      // redirect to login
      return router.push("/auth/login");
    }
    return res;
  };

  useEffect(() => {
    getCek();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const loadData = async () => {
    const cek = await getCek();
    if (!cek?.error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    console.log("pertama render");
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="flex absolute inset-0 bg-white min-h-screen h-screen justify-center items-center z-50">
        <span className="loading loading-dots loading-md" />
      </div>
    );
  }
};

export default Auth;
