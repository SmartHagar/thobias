/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useProductsApi from "@/store/api/Products";
import Product from "@/components/Product/Product";
import useSubCategoriesApi from "@/store/api/SubCategories";
import { motion } from "framer-motion";
// import * as Icon from "@phosphor-icons/react/dist/ssr";
// import Link from "next/link";

export default function BreadCrumb1() {
  const [activeTab, setActiveTab] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //   search params
  const searchParams = useSearchParams();
  const sub_category_id = searchParams.get("sub_category_id");

  // store
  const { setSubCategoriesAll, dtSubCategories } = useSubCategoriesApi();
  const { setProducts, dtProducts } = useProductsApi();

  // get all subcategories
  useEffect(() => {
    setSubCategoriesAll({});
  }, [setSubCategoriesAll]);

  // setActiveTab default
  useEffect(() => {
    if (sub_category_id) {
      setActiveTab(sub_category_id);
    } else {
      setActiveTab(dtSubCategories[0]?.id);
    }
  }, [dtSubCategories, sub_category_id]);

  // get products
  useEffect(() => {
    if (activeTab) {
      setIsLoading(true);
      setProducts({
        limit: 10,
        sub_category_id: activeTab,
      });
      setIsLoading(false);
    }
  }, [activeTab, setProducts]);

  const handleTabClick = (type: string) => {
    setActiveTab(type);
  };

  // const handleSortChange = (e: string) => {

  // };

  return (
    <div className="whate-new-block md:pt-20 pt-10">
      <div className="container">
        <div className="heading flex flex-col items-center text-center">
          <div className="heading3">Produk</div>
          {/* <div className="right flex items-center gap-3">
            <div className="select-block relative">
              <select
                id="select-filter"
                name="select-filter"
                className="caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line"
                onChange={(e) => {
                  handleSortChange(e.target.value);
                }}
                defaultValue={"Sorting"}
              >
                <option value="Sorting" disabled>
                  Sorting
                </option>
                <option value="soldQuantityHighToLow">Best Selling</option>
                <option value="discountHighToLow">Best Discount</option>
                <option value="priceHighToLow">Price High To Low</option>
                <option value="priceLowToHigh">Price Low To High</option>
              </select>
              <Icon.CaretDown
                size={12}
                className="absolute top-1/2 -translate-y-1/2 md:right-4 right-2"
              />
            </div>
          </div> */}

          <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
            {dtSubCategories.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black ${
                    activeTab === item.id ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(item.id)}
                >
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-2xl bg-white"
                    ></motion.div>
                  )}
                  <span className="relative text-button-uppercase z-[1]">
                    {item.sub_category_nm}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {isLoading && <div className="text-center mt-10">Loading...</div>}
        {dtProducts?.data && dtProducts.data.length === 0 && (
          <div className="text-center mt-10">Tidak ada produk</div>
        )}
        <div className="grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
          {dtProducts?.data &&
            dtProducts.data.length > 0 &&
            dtProducts.data.map((item) => {
              return (
                <Product
                  data={item}
                  type="grid"
                  key={item.id}
                  style="style-1"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
