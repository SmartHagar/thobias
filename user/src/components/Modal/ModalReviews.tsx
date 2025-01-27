/** @format */

"use client";

import { useModalReviewContext } from "@/context/ModalReviewContext";
import * as Icon from "@phosphor-icons/react/dist/ssr";
// Quickview.tsx
import React from "react";

const ModalReview = () => {
  // state
  // context
  const { selectedOrder, closeReview } = useModalReviewContext();
  console.log("modal review", selectedOrder);

  return (
    <div className={`modal-quickview-block`} onClick={closeReview}>
      <div
        className={`modal-quickview-main py-6 ${
          selectedOrder !== null ? "open" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col h-full gap-y-2">
          <div className="right w-full px-4">
            <div className="heading pb-6 px-4 flex items-center justify-between relative">
              <div className="heading5">Review Product</div>
              <div
                className="close-btn absolute right-0 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                onClick={closeReview}
              >
                <Icon.X size={14} />
              </div>
            </div>
          </div>
          <div className="px-6">tes</div>
        </div>
      </div>
    </div>
  );
};

export default ModalReview;
