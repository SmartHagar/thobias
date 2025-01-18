/** @format */

import type { Metadata } from "next";
import "@/styles/styles.scss";
import GlobalProvider from "./GlobalProvider";
import ModalCart from "@/components/Modal/ModalCart";
import ModalWishlist from "@/components/Modal/ModalWishlist";
import ModalSearch from "@/components/Modal/ModalSearch";
import ModalQuickview from "@/components/Modal/ModalQuickview";
import ModalCompare from "@/components/Modal/ModalCompare";
import CountdownTimeType from "@/type/CountdownType";
import { countdownTime } from "@/store/countdownTime";
import Menu from "@/components/Footer/Menu";
import TopNavThree from "@/components/Header/TopNav/TopNavThree";
import MenuFour from "@/components/Header/Menu/MenuFour";
import SliderOne from "@/components/Slider/SliderOne";

const serverTimeLeft: CountdownTimeType = countdownTime();

export const metadata: Metadata = {
  title: "WWF",
  description: "Multipurpose eCommerce Template",
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
          <div className="flex flex-col mb-24">
            <TopNavThree props="style-one bg-linear text-white" />
            <div id="header" className="relative w-full">
              <MenuFour props="bg-white" />
              <SliderOne />
            </div>
            {children}
          </div>
          <Menu />
          <ModalCart serverTimeLeft={serverTimeLeft} />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
        </body>
      </html>
    </GlobalProvider>
  );
}
