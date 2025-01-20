/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */
"use client";

import { FC, useState } from "react";

type Props = {
  label?: string;
  register: any;
  required?: boolean;
  name: string;
  errors?: any;
  valueAsNumber?: boolean;
  readOnly?: boolean;
  addClass?: string;
  defaultValue?: string;
  labelCss?: string;
  dtEdit?: string;
};

const InputColor: FC<Props> = ({
  label,
  register,
  required,
  name,
  errors,
  valueAsNumber,
  readOnly,
  addClass,
  defaultValue,
  labelCss = "text-gray-700",
  dtEdit,
}) => {
  const [color, setColor] = useState(defaultValue); // State internal untuk menyimpan warna

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = event.target.value;
    setColor(selectedColor); // Perbarui state warna
  };
  const cleanColor = () => {
    if (dtEdit) {
      setColor(dtEdit);
    } else {
      setColor("");
    }
  };
  return (
    <div className={addClass}>
      <label
        htmlFor={name}
        className={`text-sm font-medium tracking-wide ${labelCss}`}
      >
        {label}
      </label>
      {color && color !== dtEdit && (
        <span onClick={cleanColor} className="cursor-pointer ms-1">
          X
        </span>
      )}
      {required && <span className="ml-1 text-red-600">*</span>}
      <div className="relative">
        <input
          type="color"
          id={name}
          readOnly={readOnly}
          {...register(name, {
            required,
            valueAsNumber,
          })}
          defaultValue={defaultValue}
          value={color}
          onChange={handleChange} // Integrasikan onChange
        />
      </div>
      {errors?.type === "required" && (
        <p className="text-red-500 font-inter italic text-sm">
          {label} tidak boleh kosong
        </p>
      )}
    </div>
  );
};

export default InputColor;
