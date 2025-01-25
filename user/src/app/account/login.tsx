/** @format */

import Link from "next/link";
import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Register from "./register";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  return !isRegister ? (
    <div className="login-block md:py-20 py-10">
      <div className="container">
        <div className="content-main flex gap-y-8 max-md:flex-col">
          <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
            <div className="heading4">Login</div>
            <form className="md:mt-7 mt-4">
              <div className="email ">
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="username"
                  type="email"
                  placeholder="Alamat Email *"
                  required
                />
              </div>
              <div className="pass mt-5">
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="password"
                  type="password"
                  placeholder="Password *"
                  required
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                  <div className="block-input">
                    <input type="checkbox" name="remember" id="remember" />
                    <Icon.CheckSquare
                      size={20}
                      weight="fill"
                      className="icon-checkbox"
                    />
                  </div>
                  <label htmlFor="remember" className="pl-2 cursor-pointer">
                    Remember me
                  </label>
                </div>
                <Link
                  href={"/forgot-password"}
                  className="font-semibold hover:underline"
                >
                  Forgot Your Password?
                </Link>
              </div>
              <div className="block-button md:mt-7 mt-4">
                <button className="button-main">Login</button>
              </div>
            </form>
          </div>
          <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
            <div className="text-content">
              <div className="heading4">Pelanggan Baru</div>
              <div className="mt-2 text-secondary">
                Jadilah bagian dari keluarga pelanggan baru kami yang terus
                bertambah! Bergabunglah dengan kami hari ini dan buka dunia
                manfaat, penawaran, dan pengalaman yang dipersonalisasi.
              </div>
              <div className="block-button md:mt-7 mt-4">
                <button
                  type="button"
                  onClick={() => setIsRegister(true)}
                  className="button-main"
                >
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    isRegister && <Register setIsRegister={setIsRegister} />
  );
};

export default Login;
