/** @format */

import type { Metadata } from "next";
import "@/styles/styles.scss";
import GlobalProvider from "./GlobalProvider";
import ModalCart from "@/components/Modal/ModalCart";
import ModalWishlist from "@/components/Modal/ModalWishlist";
import ModalSearch from "@/components/Modal/ModalSearch";
import ModalQuickview from "@/components/Modal/ModalQuickview";
import ModalCompare from "@/components/Modal/ModalCompare";
import Menu from "@/components/Footer/Menu";
import TopNavThree from "@/components/Header/TopNav/TopNavThree";
import MenuFour from "@/components/Header/Menu/MenuFour";
import ModalReview from "@/components/Modal/ModalReviews";

export const metadata: Metadata = {
  title: "WWF",
  description: "Create by Thobias",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className="">
          <div className="flex flex-col mb-20">
            <TopNavThree props="style-one bg-linear text-white" />
            <div id="header" className="relative w-full">
              <MenuFour props="bg-white" />
            </div>
            {children}
          </div>
          <Menu />
          <ModalCart />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
          <ModalReview />
        </body>
      </html>
    </GlobalProvider>
  );
}
