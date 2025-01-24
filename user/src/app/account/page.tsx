/** @format */
"use client";
import useLogin from "@/store/auth/login";
import React, { useEffect } from "react";
import Profile from "./profile";
import Login from "./login";

const Account = () => {
  const { cekToken, dtUser } = useLogin();
  useEffect(() => {
    cekToken();

    return () => {};
  }, []);

  return (
    <main>
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
