/** @format */

"use client";

import { useModalReviewContext } from "@/context/ModalReviewContext";
import { BASE_URL } from "@/services/baseURL";
import showRupiah from "@/services/rupiah";
import ProductImagesTypes from "@/type/ProductImagesType";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
// Quickview.tsx
import React, { useState } from "react";
import useReviews from "@/store/crud/Reviews";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import StarRating from "../Other/StarRating";
import Loading from "../Other/Loading";
import useOrdersApi from "@/store/api/Orders";
import Rate from "../Other/Rate";

const ShwoReview = ({ data }: any) => {
  return (
    <div>
      <Rate currentRate={data.rating} size={20} />
      <p>{data.comment}</p>
    </div>
  );
};

const ModalReview = () => {
  // state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // context
  const { selectedOrder, closeReview } = useModalReviewContext();
  // store
  const { addData } = useReviews();
  const { setOrdersAll } = useOrdersApi();

  const { register, handleSubmit, control } = useForm<any>();

  const onSubmit: SubmitHandler<any> = async (row) => {
    setIsLoading(true);
    row.order_id = selectedOrder?.id as string;
    row.user_id = selectedOrder?.user_id as string;

    console.log({ row });
    // return;
    await addData(row);
    await setOrdersAll({
      user_id: selectedOrder?.user_id,
      status: selectedOrder?.shipping_status?.status,
    });
    closeReview();
    setIsLoading(false);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="list-cart px-6">
              {selectedOrder?.order_items?.map((order, index) => {
                const img = order.product_variant_id
                  ? order.product_variant.variant_img
                  : order.product.product_image.find(
                      (item: ProductImagesTypes) => item.is_main
                    )?.product_img;

                const price = order.product_variant_id
                  ? order.product_variant.price
                  : order.product.price;

                // const quantity = order.quantity;

                return (
                  <div
                    key={order.id}
                    className="item py-5 flex flex-col justify-between gap-3 border-b border-line"
                  >
                    <div className="infor flex items-center gap-3 w-full">
                      <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={`${BASE_URL}/${img}`}
                          width={300}
                          height={300}
                          alt={order.product.product_nm}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="name text-button">
                            {order.product.product_nm}
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-2 mt-3 w-full">
                          <div className="flex items-center text-secondary2 capitalize">
                            {order?.product_variant?.size}/
                            {order?.product_variant?.color}
                          </div>

                          <div className="cart-price text-title">
                            {showRupiah(price)}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* isi form */}
                    {selectedOrder?.review?.length === 0 ? (
                      <div className="flex flex-col">
                        <input
                          type="text"
                          hidden
                          value={order?.product_variant_id || ""}
                          {...register(`product_variant_id[${index}]`)}
                        />
                        <input
                          type="text"
                          hidden
                          value={order.product_id as string}
                          {...register(`product_id[${index}]`, {
                            required: true,
                          })}
                        />
                        <div>
                          <Controller
                            name={`rating[${index}]`}
                            control={control}
                            render={({ field }) => (
                              <StarRating
                                totalStars={5}
                                onChangeRating={field.onChange}
                                name={field.name}
                              />
                            )}
                          />
                        </div>
                        <div>
                          <label htmlFor="comment" className="text-button">
                            Review
                          </label>
                          <input
                            className="border-line mt-2 px-4 py-3 w-full rounded-lg bg-surface"
                            id="comment"
                            type="text"
                            {...register(`comment[${index}]`)}
                          />
                        </div>
                      </div>
                    ) : (
                      <ShwoReview
                        data={selectedOrder.review.find(
                          (item) =>
                            item.product_variant_id ===
                              order?.product_variant_id &&
                            item.product_id === order?.product_id
                        )}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            {selectedOrder?.review?.length === 0 && (
              <div>
                {isLoading ? (
                  <Loading />
                ) : (
                  <button type="submit" className="button-main ml-4 my-2">
                    Simpan
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalReview;
