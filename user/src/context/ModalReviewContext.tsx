/** @format */

"use client";

import OrdersTypes from "@/type/OrdersType";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalReviewContextProps {
  children: ReactNode;
}

interface ModalReviewContextValue {
  selectedOrder: OrdersTypes | null;
  openReview: (product: OrdersTypes) => void;
  closeReview: () => void;
}

const ModalReviewContext = createContext<ModalReviewContextValue | undefined>(
  undefined
);

export const ModalReviewProvider: React.FC<ModalReviewContextProps> = ({
  children,
}) => {
  const [selectedOrder, setSelectedOrder] = useState<OrdersTypes | null>(null);

  const openReview = (product: OrdersTypes) => {
    setSelectedOrder(product);
  };

  const closeReview = () => {
    setSelectedOrder(null);
  };

  return (
    <ModalReviewContext.Provider
      value={{ selectedOrder, openReview, closeReview }}
    >
      {children}
    </ModalReviewContext.Provider>
  );
};

export const useModalReviewContext = () => {
  const context = useContext(ModalReviewContext);
  if (!context) {
    throw new Error(
      "useModalReviewContext must be used within a ModalReviewProvider"
    );
  }
  return context;
};
