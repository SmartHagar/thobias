/** @format */

import React from "react";
import { ModalCartProvider } from "@/context/ModalCartContext";
import { ModalWishlistProvider } from "@/context/ModalWishlistContext";
import { ModalCompareProvider } from "@/context/ModalCompareContext";
import { ModalSearchProvider } from "@/context/ModalSearchContext";
import { ModalQuickviewProvider } from "@/context/ModalQuickviewContext";
import { ModalReviewProvider } from "@/context/ModalReviewContext";
import NotificationContextProvider from "@/context/NotificationContext";

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NotificationContextProvider>
      <ModalCartProvider>
        <ModalWishlistProvider>
          <ModalCompareProvider>
            <ModalSearchProvider>
              <ModalQuickviewProvider>
                <ModalReviewProvider>{children}</ModalReviewProvider>
              </ModalQuickviewProvider>
            </ModalSearchProvider>
          </ModalCompareProvider>
        </ModalWishlistProvider>
      </ModalCartProvider>
    </NotificationContextProvider>
  );
};

export default GlobalProvider;
