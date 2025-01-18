/** @format */

"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
// import { usePathname } from "next/navigation";
// import productData from "@/data/Product.json";
// import useMenuMobile from "@/store/useMenuMobile";
import { useModalCartContext } from "@/context/ModalCartContext";
import { useModalWishlistContext } from "@/context/ModalWishlistContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
// import ListMenu from "./NavbarMenu";
// import Mobile from "./Mobile";

interface Props {
  props: string;
}

const MenuFour: React.FC<Props> = ({ props }) => {
  // const pathname = usePathname();
  // const { openMenuMobile, handleMenuMobile } = useMenuMobile();
  // const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null);
  const { openModalCart } = useModalCartContext();
  const { cartState } = useCart();
  const { openModalWishlist } = useModalWishlistContext();
  const [searchKeyword, setSearchKeyword] = useState("");
  const router = useRouter();

  const handleSearch = (value: string) => {
    router.push(`/search-result?query=${value}`);
    setSearchKeyword("");
  };

  // const handleOpenSubNavMobile = (index: number) => {
  //   setOpenSubNavMobile(openSubNavMobile === index ? null : index);
  // };

  const [fixedHeader, setFixedHeader] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
      setLastScrollPosition(scrollPosition);
    };

    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener("scroll", handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  // const handleGenderClick = (gender: string) => {
  //   router.push(`/shop/breadcrumb1?gender=${gender}`);
  // };

  // const handleCategoryClick = (category: string) => {
  //   router.push(`/shop/breadcrumb1?category=${category}`);
  // };

  // const handleTypeClick = (type: string) => {
  //   router.push(`/shop/breadcrumb1?type=${type}`);
  // };

  return (
    <>
      <div
        className={`header-menu style-one ${
          fixedHeader ? " fixed" : "relative"
        } w-full md:h-[74px] h-[56px] ${props}`}
      >
        <div className="container mx-auto h-full">
          <div className="header-main flex items-center justify-between h-full">
            {/* <div
              className="menu-mobile-icon lg:hidden flex items-center"
              onClick={handleMenuMobile}
            >
              <i className="icon-category text-2xl"></i>
            </div> */}
            {/* search */}
            <div className="form-search relative lg:hidden z-[1]">
              <Icon.MagnifyingGlass
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  handleSearch(searchKeyword);
                }}
              />
              <input
                type="text"
                placeholder="Apa yang anda butuhkan?"
                className=" h-10 rounded-lg border border-line caption2 w-full pl-9 pr-4"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSearch(searchKeyword)
                }
              />
            </div>
            <div></div>
            <div className="form-search relative max-lg:hidden z-[1]">
              <Icon.MagnifyingGlass
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  handleSearch(searchKeyword);
                }}
              />
              <input
                type="text"
                placeholder="Apa yang anda butuhkan?"
                className=" h-10 rounded-lg border border-line caption2 w-full pl-9 pr-4"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSearch(searchKeyword)
                }
              />
            </div>
            {/* <ListMenu
              handleCategoryClick={handleCategoryClick}
              handleGenderClick={handleGenderClick}
              handleTypeClick={handleTypeClick}
              productData={productData}
              pathname={pathname}
            /> */}
            <div className="right flex gap-12 z-[1]">
              <div className="list-action flex items-center gap-4">
                <div
                  className="wishlist-icon flex items-center cursor-pointer"
                  onClick={openModalWishlist}
                >
                  <Icon.Heart size={24} color="black" />
                </div>
                <div
                  className="cart-icon flex items-center relative cursor-pointer"
                  onClick={openModalCart}
                >
                  <Icon.Handbag size={24} color="black" />
                  <span className="quantity cart-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">
                    {cartState.cartArray.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Mobile
        openMenuMobile={openMenuMobile}
        handleMenuMobile={handleMenuMobile}
        handleGenderClick={handleGenderClick}
        handleTypeClick={handleTypeClick}
        handleCategoryClick={handleCategoryClick}
        productData={productData}
        pathname={pathname}
        openSubNavMobile={openSubNavMobile}
        handleOpenSubNavMobile={handleOpenSubNavMobile}
      /> */}
    </>
  );
};

export default MenuFour;
