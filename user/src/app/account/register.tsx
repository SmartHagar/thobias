/** @format */

import React, { Dispatch } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

type Props = {
  setIsRegister: Dispatch<React.SetStateAction<boolean>>;
};

const Register = ({ setIsRegister }: Props) => {
  return (
    <div className="register-block md:py-20 py-10">
      <div className="container">
        <div className="content-main flex gap-y-8 max-md:flex-col">
          <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
            <div className="heading4">Daftar</div>
            <form className="md:mt-7 mt-4">
              <div className="email ">
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="username"
                  type="email"
                  placeholder="Username or email address *"
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
              <div className="confirm-pass mt-5">
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password *"
                  required
                />
              </div>
              <div className="flex items-center mt-5">
                <div className="block-input">
                  <input type="checkbox" name="remember" id="remember" />
                  <Icon.CheckSquare
                    size={20}
                    weight="fill"
                    className="icon-checkbox"
                  />
                </div>
              </div>
              <div className="block-button md:mt-7 mt-4">
                <button className="button-main">Register</button>
              </div>
            </form>
          </div>
          <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
            <div className="text-content">
              <div className="heading4">Sudah punya akun?</div>
              <div className="mt-2 text-secondary">
                Selamat datang kembali. Masuk untuk mengakses pengalaman pribadi
                Anda, preferensi yang disimpan, dan banyak lagi. Kami sangat
                senang memiliki Anda bersama kami lagi!
              </div>
              <div className="block-button md:mt-7 mt-4">
                <button
                  onClick={() => setIsRegister(false)}
                  className="button-main"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
