/** @format */
"use client";
import useLogin from "@/store/auth/login";
import React, { useEffect, useState } from "react";
import Profile from "./profile";
import Login from "./login";
import { Toaster } from "react-hot-toast";

const Account = () => {
  const { cekToken, dtUser } = useLogin();
  // state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    cekToken();
    setIsLoading(false);

    return () => {};
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Toaster />

      {dtUser ? (
        <section>
          <Profile dtUser={dtUser} />
        </section>
      ) : (
        <section>
          <Login />
        </section>
      )}
    </main>
  );
};

export default Account;
