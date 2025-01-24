/** @format */
"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Detail = () => {
  const searchParams = useSearchParams();
  const product_id = searchParams.get("product_id");
  console.log({ product_id });
  return <div>Detail</div>;
};

export default Detail;
