/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */
"use client";

import { FC } from "react";

type Props = {
  label?: string;
  register: any;
  name: string;
  required?: boolean;
  errors?: any;
  defaultChecked?: boolean;
  addClass?: string;
  labelCss?: string;
};

const InputToggle: FC<Props> = ({
  label,
  register,
  name,
  required,
  errors,
  defaultChecked = false,
  addClass,
  labelCss = "text-gray-700",
}) => {
  return (
    <div className={`${addClass}`}>
      <label className="label cursor-pointer flex justify-start">
        <span className={`label-text whitespace-nowrap mr-4 ${labelCss}`}>
          {label}
        </span>
        <input
          type="checkbox"
          className="toggle toggle-accent"
          defaultChecked={defaultChecked}
          {...register(name, { required })}
        />
      </label>
      {errors?.[name]?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} harus diaktifkan
        </p>
      )}
    </div>
  );
};

export default InputToggle;
