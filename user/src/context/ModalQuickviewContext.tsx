/** @format */

"use client";

import ProductsTypes from "@/type/ProductsType";
// ModalQuickviewContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalQuickviewContextProps {
  children: ReactNode;
}

interface ModalQuickviewContextValue {
  selectedProduct: ProductsTypes | null;
  openQuickview: (product: ProductsTypes) => void;
  closeQuickview: () => void;
}

const ModalQuickviewContext = createContext<
  ModalQuickviewContextValue | undefined
>(undefined);

export const ModalQuickviewProvider: React.FC<ModalQuickviewContextProps> = ({
  children,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductsTypes | null>(
    null
  );

  const openQuickview = (product: ProductsTypes) => {
    setSelectedProduct(product);
  };

  const closeQuickview = () => {
    setSelectedProduct(null);
  };

  return (
    <ModalQuickviewContext.Provider
      value={{ selectedProduct, openQuickview, closeQuickview }}
    >
      {children}
    </ModalQuickviewContext.Provider>
  );
};

export const useModalQuickviewContext = () => {
  const context = useContext(ModalQuickviewContext);
  if (!context) {
    throw new Error(
      "useModalQuickviewContext must be used within a ModalQuickviewProvider"
    );
  }
  return context;
};
