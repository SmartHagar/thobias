/** @format */

import Product from "@/components/Product/Product";
import Link from "next/link";
import React from "react";

type Props = {
  pathname: string;
  productData: any[];
};

const NavbarMenu = ({ pathname, productData }: Props) => {
  return (
    <div className="menu-main h-full xl:w-full flex items-center justify-center max-lg:hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
      <ul className="flex items-center gap-8 h-full">
        <li className="h-full relative">
          <Link
            href="#!"
            className={`text-button-uppercase duration-300 h-full flex items-center justify-center gap-1 ${
              pathname === "/" ? "active" : ""
            }`}
          >
            Demo
          </Link>
        </li>
        <li className="h-full">
          <Link
            href="#!"
            className="text-button-uppercase duration-300 h-full flex items-center justify-center"
          >
            Features
          </Link>
          <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
            <div className="container">
              <div className="flex justify-between py-8">
                <div className="nav-link grid grid-cols-6 gap-y-8 border w-full">
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">For Men</div>
                    <ul>
                      <li>
                        <div
                          // onClick={() => handleGenderClick("men")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Starting From 50% Off
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("outerwear")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Outerwear | Coats
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("sweater")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Sweaters | Cardigans
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("shirt")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Shirt | Sweatshirts
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleGenderClick("men")}
                          className={`link text-secondary duration-300 cursor-pointer view-all-btn`}
                        >
                          View All
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">
                      Massimo Dutti
                    </div>
                    <ul>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("shirt")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Shirt | Clothes
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("top")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Top | Overshirts
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("t-shirt")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          T-shirts | Clothes
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("swimwear")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Swimwear | Underwear
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleCategoryClick("fashion")}
                          className={`link text-secondary duration-300 view-all-btn`}
                        >
                          View All
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">Skincare</div>
                    <ul>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("face")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Faces Skin
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("eye")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Eyes Makeup
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("lip")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Lip Polish
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("hair")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Hair Care
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleCategoryClick("cosmetic")}
                          className={`link text-secondary duration-300 view-all-btn`}
                        >
                          View All
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">Health</div>
                    <ul>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("candle")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Cented Candle
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("drinks")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Health Drinks
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("clothes")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Yoga Clothes
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("mats")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Yoga Equipment
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleCategoryClick("yoga")}
                          className={`link text-secondary duration-300 view-all-btn`}
                        >
                          View All
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">For Women</div>
                    <ul>
                      <li>
                        <div
                          // onClick={() => handleGenderClick("women")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Starting From 60% Off
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("dress")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Dresses | Jumpsuits
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("t-shirt")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          T-shirts | Sweatshirts
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("accessories")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Accessories | Jewelry
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleGenderClick("women")}
                          className={`link text-secondary duration-300 view-all-btn`}
                        >
                          View All
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">For Kid</div>
                    <ul>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("bed")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Kids Bed
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("toy")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Boy{String.raw`'s`} Toy
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("blanket")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Baby Blanket
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("clothing")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Newborn Clothing
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleCategoryClick("toys-kid")}
                          className={`link text-secondary duration-300 view-all-btn`}
                        >
                          View All
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">For Home</div>
                    <ul>
                      <li>
                        <div
                          // onClick={() => handleCategoryClick("furniture")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Furniture | Decor
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("table")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Table | Living Room
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("chair")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Chair | Work Room
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleTypeClick("lighting")}
                          className={`link text-secondary duration-300 cursor-pointer`}
                        >
                          Lighting | Bed Room
                        </div>
                      </li>
                      <li>
                        <div
                          // onClick={() => handleCategoryClick("furniture")}
                          className={`link text-secondary duration-300 view-all-btn`}
                        >
                          View All
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="h-full">
          <Link
            href="#!"
            className="text-button-uppercase duration-300 h-full flex items-center justify-center"
          >
            Shop
          </Link>
          <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
            <div className="container">
              <div className="flex justify-between py-8">
                <div className="nav-link basis-2/3 flex justify-between pr-12">
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">
                      Shop Features
                    </div>
                    <ul>
                      <li>
                        <Link
                          href={"/shop/breadcrumb-img"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/shop/breadcrumb-img" ? "active" : ""
                          }`}
                        >
                          Shop Breadcrumb IMG
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/breadcrumb1"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/shop/breadcrumb1" ? "active" : ""
                          }`}
                        >
                          Shop Breadcrumb 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/breadcrumb2"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/shop/breadcrumb2" ? "active" : ""
                          }`}
                        >
                          Shop Breadcrumb 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/collection"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/shop/collection" ? "active" : ""
                          }`}
                        >
                          Shop Collection
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">
                      Shop Features
                    </div>
                    <ul>
                      <li>
                        <Link
                          href={"/shop/filter-canvas"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/shop/filter-canvas" ? "active" : ""
                          }`}
                        >
                          Shop Filter Canvas
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/filter-options"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/shop/filter-options" ? "active" : ""
                          }`}
                        >
                          Shop Filter Options
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/filter-dropdown"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/shop/filter-dropdown" ? "active" : ""
                          }`}
                        >
                          Shop Filter Dropdown
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/sidebar-list"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/shop/sidebar-list" ? "active" : ""
                          }`}
                        >
                          Shop Sidebar List
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">
                      Shop Layout
                    </div>
                    <ul>
                      <li>
                        <Link
                          href={"/shop/default"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/shop/default" ? "active" : ""
                          }`}
                        >
                          Shop Default
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/default-grid"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/shop/default-grid" ? "active" : ""
                          }`}
                        >
                          Shop Default Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/default-list"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/shop/default-list" ? "active" : ""
                          }`}
                        >
                          Shop Default List
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/fullwidth"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/shop/fullwidth" ? "active" : ""
                          }`}
                        >
                          Shop Full Width
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/shop/square"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/shop/square" ? "active" : ""
                          }`}
                        >
                          Shop Square
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/checkout"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/checkout" ? "active" : ""
                          }`}
                        >
                          Checkout
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/checkout2"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/checkout2" ? "active" : ""
                          }`}
                        >
                          Checkout Style 2
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">
                      Products Pages
                    </div>
                    <ul>
                      <li>
                        <Link
                          href={"/wishlist"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/wishlist" ? "active" : ""
                          }`}
                        >
                          Wish List
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/search-result"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/search-result" ? "active" : ""
                          }`}
                        >
                          Search Result
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/cart"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/cart" ? "active" : ""
                          }`}
                        >
                          Shopping Cart
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/login"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/login" ? "active" : ""
                          }`}
                        >
                          Login/Register
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/forgot-password"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/forgot-password" ? "active" : ""
                          }`}
                        >
                          Forgot Password
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/order-tracking"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/order-tracking" ? "active" : ""
                          }`}
                        >
                          Order Tracking
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/my-account"}
                          className={`link text-secondary duration-300 ${
                            pathname === "/my-account" ? "active" : ""
                          }`}
                        >
                          My Account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="h-full flex items-center justify-center logo">
          <Link href={"/"} className="heading4">
            WWF
          </Link>
        </li>
        <li className="h-full">
          <Link
            href="#!"
            className="text-button-uppercase duration-300 h-full flex items-center justify-center"
          >
            Product
          </Link>
          <div className="mega-menu absolute top-[74px] left-0 bg-white w-screen">
            <div className="container">
              <div className="flex justify-between py-8">
                <div className="nav-link basis-2/3 flex justify-between xl:pr-14 pr-5">
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">
                      Products Features
                    </div>
                    <ul>
                      <li>
                        <Link
                          href={"/product/default"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/default" ? "active" : ""
                          }`}
                        >
                          Products Defaults
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/sale"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/sale" ? "active" : ""
                          }`}
                        >
                          Products Sale
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/countdown-timer"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/countdown-timer"
                              ? "active"
                              : ""
                          }`}
                        >
                          Products Countdown Timer
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/grouped"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/grouped" ? "active" : ""
                          }`}
                        >
                          Products Grouped
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/bought-together"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/bought-together"
                              ? "active"
                              : ""
                          }`}
                        >
                          Frequently Bought Together
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/out-of-stock"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/out-of-stock" ? "active" : ""
                          }`}
                        >
                          Products Out Of Stock
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/variable"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/variable" ? "active" : ""
                          }`}
                        >
                          Products Variable
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">
                      Products Features
                    </div>
                    <ul>
                      <li>
                        <Link
                          href={"/product/external"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/external" ? "active" : ""
                          }`}
                        >
                          Products External
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/on-sale"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/on-sale" ? "active" : ""
                          }`}
                        >
                          Products On Sale
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/discount"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/discount" ? "active" : ""
                          }`}
                        >
                          Products With Discount
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/sidebar"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/sidebar" ? "active" : ""
                          }`}
                        >
                          Products With Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/fixed-price"}
                          className={`text-secondary duration-300 ${
                            pathname === "/product/fixed-price" ? "active" : ""
                          }`}
                        >
                          Products Fixed Price
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item">
                    <div className="text-button-uppercase pb-2">
                      Products Layout
                    </div>
                    <ul>
                      <li>
                        <Link
                          href={"/product/thumbnail-left"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/product/thumbnail-left"
                              ? "active"
                              : ""
                          }`}
                        >
                          Products Thumbnails Left
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/thumbnail-bottom"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/product/thumbnail-bottom"
                              ? "active"
                              : ""
                          }`}
                        >
                          Products Thumbnails Bottom
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/one-scrolling"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/product/one-scrolling"
                              ? "active"
                              : ""
                          }`}
                        >
                          Products Grid 1 Scrolling
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/two-scrolling"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/product/two-scrolling"
                              ? "active"
                              : ""
                          }`}
                        >
                          Products Grid 2 Scrolling
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/combined-one"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/product/combined-one" ? "active" : ""
                          }`}
                        >
                          Products Combined 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/product/combined-two"}
                          className={`link text-secondary duration-300 cursor-pointer ${
                            pathname === "/product/combined-two" ? "active" : ""
                          }`}
                        >
                          Products Combined 2
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="recent-product pl-2.5 basis-1/3">
                  <div className="text-button-uppercase pb-2">
                    Recent Products
                  </div>
                  <div className="list-product hide-product-sold  grid grid-cols-2 gap-5 mt-3">
                    {productData
                      .filter((item) => item.action === "add to cart")
                      .slice(0, 2)
                      .map((prd, index) => (
                        <Product
                          key={index}
                          data={prd}
                          type="grid"
                          style="style-1"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="h-full relative">
          <Link
            href="#!"
            className="text-button-uppercase duration-300 h-full flex items-center justify-center"
          >
            Blog
          </Link>
          <div className="sub-menu py-3 px-5 -left-10 absolute bg-white rounded-b-xl">
            <ul className="w-full">
              <li>
                <Link
                  href="/blog/default"
                  className={`text-secondary duration-300 ${
                    pathname === "/blog/default" ? "active" : ""
                  }`}
                >
                  Blog Default
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/list"
                  className={`text-secondary duration-300 ${
                    pathname === "/blog/list" ? "active" : ""
                  }`}
                >
                  Blog List
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/grid"
                  className={`text-secondary duration-300 ${
                    pathname === "/blog/grid" ? "active" : ""
                  }`}
                >
                  Blog Grid
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/detail1"
                  className={`text-secondary duration-300 ${
                    pathname === "/blog/detail1" ? "active" : ""
                  }`}
                >
                  Blog Detail 1
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/detail2"
                  className={`text-secondary duration-300 ${
                    pathname === "/blog/detail2" ? "active" : ""
                  }`}
                >
                  Blog Detail 2
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="h-full relative">
          <Link
            href="#!"
            className="text-button-uppercase duration-300 h-full flex items-center justify-center"
          >
            Pages
          </Link>
          <div className="sub-menu py-3 px-5 -left-10 absolute bg-white rounded-b-xl">
            <ul className="w-full">
              <li>
                <Link
                  href="/pages/about"
                  className={`text-secondary duration-300 ${
                    pathname === "/pages/about" ? "active" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className={`text-secondary duration-300 ${
                    pathname === "/pages/contact" ? "active" : ""
                  }`}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/store-list"
                  className={`text-secondary duration-300 ${
                    pathname === "/pages/store-list" ? "active" : ""
                  }`}
                >
                  Store List
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/page-not-found"
                  className={`text-secondary duration-300 ${
                    pathname === "/pages/page-not-found" ? "active" : ""
                  }`}
                >
                  404
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/faqs"
                  className={`text-secondary duration-300 ${
                    pathname === "/pages/faqs" ? "active" : ""
                  }`}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/coming-soon"
                  className={`text-secondary duration-300 ${
                    pathname === "/pages/coming-soon" ? "active" : ""
                  }`}
                >
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/customer-feedbacks"
                  className={`text-secondary duration-300 ${
                    pathname === "/pages/customer-feedbacks" ? "active" : ""
                  }`}
                >
                  Customer Feedbacks
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
