/** @format */

import VariantsTypes from "@/type/VariantsType";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

type Props = {
  product_variant: VariantsTypes[];
  setActiveColor: Dispatch<SetStateAction<string | null>>;
  activeColor: string | null;
  setActiveSize: Dispatch<SetStateAction<string | null>>;
  activeSize: string | null;
};

const Variants = ({
  product_variant,
  setActiveColor,
  setActiveSize,
  activeColor,
  activeSize,
}: Props) => {
  // Ambil semua warna yang tersedia tanpa memperhatikan ukuran
  const uniqueColors = Array.from(
    new Set(product_variant.map((item) => item.color).filter(Boolean))
  );

  // Ambil semua ukuran yang tersedia tanpa memperhatikan warna
  const uniqueSizes = Array.from(
    new Set(product_variant.map((item) => item.size).filter(Boolean))
  );

  // Fungsi untuk mengecek apakah kombinasi warna dan ukuran tersedia
  const isVariantAvailable = (color: string, size: string) => {
    return product_variant.some(
      (variant) => variant.color === color && variant.size === size
    );
  };

  // Pertama, ubah fungsi handleActiveColor untuk me-reset size jika kombinasi tidak tersedia
  const handleActiveColor = (color: string) => {
    setActiveColor(color);

    // Cek apakah size yang dipilih saat ini tersedia untuk warna baru
    if (activeSize && !isVariantAvailable(color, activeSize)) {
      setActiveSize(null); // Reset size jika kombinasi tidak tersedia
    }

    // filter color
    const filteredColor = product_variant.filter(
      (variant) => variant.color === color
    );
    const availableSize = filteredColor[0]?.size;
    console.log({ availableSize });
    setActiveSize(availableSize);
  };

  // Sama untuk handleActiveSize
  const handleActiveSize = (size: string) => {
    setActiveSize(size);

    // Cek apakah warna yang dipilih saat ini tersedia untuk size baru
    if (activeColor && !isVariantAvailable(activeColor, size)) {
      setActiveColor(null); // Reset color jika kombinasi tidak tersedia
    }
  };

  // setActiveSize and setActiveColor if uniqueColors or uniqueSizes not empty
  useEffect(() => {
    if (uniqueColors.length > 0 && !activeColor) {
      setActiveColor(uniqueColors[0]);
    }
    if (uniqueSizes.length > 0 && !activeSize) {
      setActiveSize(uniqueSizes[0]);
    }
  }, [
    activeColor,
    activeSize,
    setActiveColor,
    setActiveSize,
    uniqueColors,
    uniqueSizes,
  ]);
  return (
    <>
      {uniqueColors.length > 0 && (
        <div className="choose-color">
          <div className="text-title">
            Colors: <span className="text-title color">{activeColor}</span>
          </div>
          <div className="list-color flex items-center gap-2 flex-wrap mt-3">
            <div className="right flex items-center gap-3">
              <div className="select-block relative">
                <select
                  id="select-filter"
                  name="select-filter"
                  className="caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line"
                  onChange={(e) => {
                    handleActiveColor(e.target.value);
                  }}
                >
                  {uniqueColors.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
                <Icon.CaretDown
                  size={12}
                  className="absolute top-1/2 -translate-y-1/2 md:right-4 right-2"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {uniqueSizes.length > 0 && (
        <div className="choose-size mt-5">
          <div className="heading flex items-center justify-between">
            <div className="text-title">
              Size: <span className="text-title size">{activeSize}</span>
            </div>
          </div>
          <div className="list-size flex items-center gap-2 flex-wrap mt-3">
            {uniqueSizes.map((size, index) => {
              const isAvailable =
                !activeColor || isVariantAvailable(activeColor, size);
              return (
                <div
                  className={`size-item ${
                    size === "freesize" ? "px-3 py-2" : "w-12 h-12"
                  } flex items-center justify-center text-button rounded-full bg-white border border-line 
            ${activeSize === size ? "active" : ""}
            ${
              !isAvailable ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
                  key={index}
                  onClick={() => isAvailable && handleActiveSize(size)}
                >
                  {size}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Variants;
