/** @format */

import React, { Dispatch, SetStateAction, useEffect } from "react";
import Rate from "./Rate";
import ReviewsTypes from "@/type/ReviewsType";
import { momentId } from "@/utils/momentIndonesia";

type Props = {
  dtReviews: ReviewsTypes[];
  setRateProduct: Dispatch<SetStateAction<number>>;
};

const ListReview = ({ dtReviews, setRateProduct }: Props) => {
  const handleRating = () => {
    const totalRating = dtReviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    const averageRating = dtReviews.length ? totalRating / dtReviews.length : 0;

    setRateProduct(averageRating);
  };

  useEffect(() => {
    if (dtReviews?.length > 0) {
      handleRating();
    }
  }, [dtReviews]);
  console.log({ dtReviews });

  return (
    <div className="list-review">
      <h1 className="heading3">Review Pembeli ({dtReviews?.length})</h1>
      {dtReviews?.length > 0 &&
        dtReviews.map((item) => (
          <div
            className="item flex max-lg:flex-col gap-y-4 w-full py-6 border-t border-line"
            key={item.id}
          >
            <div className="left lg:w-1/4 w-full lg:pr-[15px]">
              <div className="user mt-3">
                <div className="text-title">{item.user.name}</div>
                <div className="flex items-center gap-2">
                  <div className="text-secondary2">
                    {momentId(item.created_at).fromNow()}
                  </div>
                  <div className="text-secondary2">-</div>
                  <div className="text-secondary2">
                    {item?.product_variant && (
                      <>
                        <span>{item?.product_variant?.color}</span> /{" "}
                        <span>{item?.product_variant?.size}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="right lg:w-3/4 w-full lg:pl-[15px]">
              <Rate currentRate={item.rating} size={16} />
              <div>
                <p>{item.comment}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListReview;
