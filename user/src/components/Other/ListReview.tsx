/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rate from "./Rate";
import ReviewsTypes from "@/type/ReviewsType";
import * as Icon from "@phosphor-icons/react/dist/ssr";

type Props = {
  dtReviews: ReviewsTypes;
};

const ListReview = ({ dtReviews }: Props) => {
  console.log({ dtReviews });
  return (
    <div className="list-review">
      <div className="item flex max-lg:flex-col gap-y-4 w-full py-6 border-t border-line">
        <div className="left lg:w-1/4 w-full lg:pr-[15px]">
          <div className="list-img-review flex gap-2">
            <Image
              src={"/images/product/1000x1000.png"}
              width={200}
              height={200}
              alt="img"
              className="w-[60px] aspect-square rounded-lg"
            />
            <Image
              src={"/images/product/1000x1000.png"}
              width={200}
              height={200}
              alt="img"
              className="w-[60px] aspect-square rounded-lg"
            />
            <Image
              src={"/images/product/1000x1000.png"}
              width={200}
              height={200}
              alt="img"
              className="w-[60px] aspect-square rounded-lg"
            />
          </div>
          <div className="user mt-3">
            <div className="text-title">Tony Nguyen</div>
            <div className="flex items-center gap-2">
              <div className="text-secondary2">1 days ago</div>
              <div className="text-secondary2">-</div>
              <div className="text-secondary2">
                <span>Yellow</span> / <span>XL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right lg:w-3/4 w-full lg:pl-[15px]">
          <Rate currentRate={5} size={16} />
          <div className="heading5 mt-3">
            Unbeatable Style and Quality: A Fashion Brand That Delivers
          </div>
          <div className="body1 mt-3">
            I can{String.raw`'t`} get enough of the fashion pieces from this
            brand. They have a great selection for every occasion and the prices
            are reasonable. The shipping is fast and the items always arrive in
            perfect condition.
          </div>
          <div className="action mt-3">
            <div className="flex items-center gap-4">
              <div className="like-btn flex items-center gap-1 cursor-pointer">
                <Icon.HandsClapping size={18} />
                <div className="text-button">20</div>
              </div>
              <Link
                href={"#form-review"}
                className="reply-btn text-button text-secondary cursor-pointer hover:text-black"
              >
                Reply
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="item flex max-lg:flex-col gap-y-4 w-full py-6 border-t border-line">
        <div className="left lg:w-1/4 w-full lg:pr-[15px]">
          <div className="list-img-review flex gap-2">
            <Image
              src={"/images/product/1000x1000.png"}
              width={200}
              height={200}
              alt="img"
              className="w-[60px] aspect-square rounded-lg"
            />
            <Image
              src={"/images/product/1000x1000.png"}
              width={200}
              height={200}
              alt="img"
              className="w-[60px] aspect-square rounded-lg"
            />
            <Image
              src={"/images/product/1000x1000.png"}
              width={200}
              height={200}
              alt="img"
              className="w-[60px] aspect-square rounded-lg"
            />
          </div>
          <div className="user mt-3">
            <div className="text-title">Tony Nguyen</div>
            <div className="flex items-center gap-2">
              <div className="text-secondary2">1 days ago</div>
              <div className="text-secondary2">-</div>
              <div className="text-secondary2">
                <span>Yellow</span> / <span>XL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right lg:w-3/4 w-full lg:pl-[15px]">
          <Rate currentRate={5} size={16} />
          <div className="heading5 mt-3">
            Exceptional Fashion: The Perfect Blend of Style and Durability
          </div>
          <div className="body1 mt-3">
            The fashion brand{String.raw`'s`} online shopping experience is
            seamless. The website is user-friendly, the product images are
            clear, and the checkout process is quick.
          </div>
          <div className="action mt-3">
            <div className="flex items-center gap-4">
              <div className="like-btn flex items-center gap-1 cursor-pointer">
                <Icon.HandsClapping size={18} />
                <div className="text-button">20</div>
              </div>
              <Link
                href={"#form-review"}
                className="reply-btn text-button text-secondary cursor-pointer hover:text-black"
              >
                Reply
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="item flex max-lg:flex-col gap-y-4 w-full py-6 border-t border-line">
        <div className="left lg:w-1/4 w-full lg:pr-[15px]">
          <div className="list-img-review flex gap-2">
            <Image
              src={"/images/product/1000x1000.png"}
              width={200}
              height={200}
              alt="img"
              className="w-[60px] aspect-square rounded-lg"
            />
            <Image
              src={"/images/product/1000x1000.png"}
              width={200}
              height={200}
              alt="img"
              className="w-[60px] aspect-square rounded-lg"
            />
            <Image
              src={"/images/product/1000x1000.png"}
              width={200}
              height={200}
              alt="img"
              className="w-[60px] aspect-square rounded-lg"
            />
          </div>
          <div className="user mt-3">
            <div className="text-title">Tony Nguyen</div>
            <div className="flex items-center gap-2">
              <div className="text-secondary2">1 days ago</div>
              <div className="text-secondary2">-</div>
              <div className="text-secondary2">
                <span>Yellow</span> / <span>XL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right lg:w-3/4 w-full lg:pl-[15px]">
          <Rate currentRate={5} size={16} />
          <div className="heading5 mt-3">
            Elevate Your Wardrobe: Stunning Dresses That Make a Statement
          </div>
          <div className="body1 mt-3">
            I love how sustainable and ethically conscious this fashion brand
            is. They prioritize eco-friendly materials and fair trade practices,
            which makes me feel good about supporting them.
          </div>
          <div className="action mt-3">
            <div className="flex items-center gap-4">
              <div className="like-btn flex items-center gap-1 cursor-pointer">
                <Icon.HandsClapping size={18} />
                <div className="text-button">20</div>
              </div>
              <Link
                href={"#form-review"}
                className="reply-btn text-button text-secondary cursor-pointer hover:text-black"
              >
                Reply
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListReview;
