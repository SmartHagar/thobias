/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useSubCategoriesApi from "@/store/api/SubCategories";
import useProductsApi from "@/store/api/Products";
import Product from "../Product/Product";

const WhatNewOne = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // store
  const { setSubCategoriesAll, dtSubCategories } = useSubCategoriesApi();
  const { setProducts, dtProducts } = useProductsApi();

  // get all subcategories
  useEffect(() => {
    setSubCategoriesAll({});
  }, [setSubCategoriesAll]);

  // setActiveTab default
  useEffect(() => {
    setActiveTab(dtSubCategories?.[0]?.id);
  }, [dtSubCategories]);

  // get products
  useEffect(() => {
    if (activeTab) {
      setIsLoading(true);
      setProducts({
        limit: 4,
        sub_category_id: activeTab,
      });
      setIsLoading(false);
    }
  }, [activeTab, setProducts]);

  const handleTabClick = (type: string) => {
    setActiveTab(type);
  };

  return (
    <>
      <div className="whate-new-block md:pt-20 pt-10">
        <div className="container">
          <div className="heading flex flex-col items-center text-center">
            <div className="heading3">Produk Terbaru</div>
            <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl mt-6">
              {dtSubCategories &&
                dtSubCategories.map((item) => {
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
    </>
  );
};

export default WhatNewOne;
