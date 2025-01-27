/** @format */
"use client";
import useLogin from "@/store/auth/login";
import React, { Suspense, useEffect, useState } from "react";
import Profile from "./profile";
import Login from "./login";
import { Toaster } from "react-hot-toast";
import Loading from "@/components/Other/Loading";

const Account = () => {
  const { cekToken, dtUser } = useLogin();
  // state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(true);
    cekToken();
    setIsLoading(false);

    return () => {};
  }, []);

  if (isLoading) {
    return (
      <div className="h-full w-screen flex items-center justify-center">
        {/* animation loading */}
        <Loading />
      </div>
    );
  }

  return (
    <main>
      <Toaster />

      {!isLoading && dtUser ? (
        <Suspense fallback={<Loading />}>
          <Profile dtUser={dtUser} />
        </Suspense>
      ) : (
        <section>
          <Login />
        </section>
      )}
    </main>
  );
};

export default Account;
