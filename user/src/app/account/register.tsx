/** @format */

import React, { Dispatch } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import useLogin from "@/store/auth/login";
import { SubmitHandler, useForm } from "react-hook-form";
import RegisterTypes from "@/type/RegisterType";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Cookies from "js-cookie";

type Props = {
  setIsRegister: Dispatch<React.SetStateAction<boolean>>;
};

const registerSchema = yup.object().shape({
  name: yup.string().required("Name harus diisi"),
  email: yup.string().email("Email tidak valid").required("Email harus diisi"),
  password: yup
    .string()
    .required("Password harus diisi")
    .min(8, "Password minimal 8 karakter"),
  confirmPassword: yup
    .string()
    .required("Konfirmasi password harus diisi")
    .oneOf([yup.ref("password")], "Konfirmasi password tidak cocok"),
});

const Register = ({ setIsRegister }: Props) => {
  const { setRegister } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterTypes>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterTypes> = async (row) => {
    const res = await setRegister(row);
    if (res.status === "success") {
      const { token, role, user } = res.data;
      Cookies.set("token", token);
      Cookies.set("role", role);
      Cookies.set("user", JSON.stringify(user));
      setIsRegister(false);
    }
  };

  return (
    <div className="register-block md:py-20 py-10">
      <div className="container">
        <div className="content-main flex gap-y-8 max-md:flex-col">
          <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
            <div className="heading4">Daftar</div>
            <form className="md:mt-7 mt-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="pass">
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="name"
                  type="name"
                  placeholder="Nama *"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="email mt-5">
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="username"
                  placeholder="Alamat Email *"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="pass mt-5">
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="password"
                  type="password"
                  placeholder="Password *"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="confirm-pass mt-5">
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password *"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
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
