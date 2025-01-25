/** @format */

import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Address = () => {
  const [activeAddress, setActiveAddress] = useState<string | null>("billing");

  const handleActiveAddress = (order: string) => {
    setActiveAddress((prevOrder) => (prevOrder === order ? null : order));
  };
  return (
    <>
      <form>
        <button
          type="button"
          className={`tab_btn flex items-center justify-between w-full pb-1.5 border-b border-line ${
            activeAddress === "billing" ? "active" : ""
          }`}
          onClick={() => handleActiveAddress("billing")}
        >
          <strong className="heading6">Billing address</strong>
          <Icon.CaretDown className="text-2xl ic_down duration-300" />
        </button>
        <div
          className={`form_address ${
            activeAddress === "billing" ? "block" : "hidden"
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-4 gap-y-5 mt-5">
            <div className="first-name">
              <label htmlFor="billingFirstName" className="caption1 capitalize">
                First Name <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingFirstName"
                type="text"
                required
              />
            </div>
            <div className="last-name">
              <label htmlFor="billingLastName" className="caption1 capitalize">
                Last Name <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingLastName"
                type="text"
                required
              />
            </div>
            <div className="company">
              <label htmlFor="billingCompany" className="caption1 capitalize">
                Company name (optional)
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingCompany"
                type="text"
                required
              />
            </div>
            <div className="country">
              <label htmlFor="billingCountry" className="caption1 capitalize">
                Country / Region <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingCountry"
                type="text"
                required
              />
            </div>
            <div className="street">
              <label htmlFor="billingStreet" className="caption1 capitalize">
                street address <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingStreet"
                type="text"
                required
              />
            </div>
            <div className="city">
              <label htmlFor="billingCity" className="caption1 capitalize">
                Town / city <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingCity"
                type="text"
                required
              />
            </div>
            <div className="state">
              <label htmlFor="billingState" className="caption1 capitalize">
                state <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingState"
                type="text"
                required
              />
            </div>
            <div className="zip">
              <label htmlFor="billingZip" className="caption1 capitalize">
                ZIP <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingZip"
                type="text"
                required
              />
            </div>
            <div className="phone">
              <label htmlFor="billingPhone" className="caption1 capitalize">
                Phone <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingPhone"
                type="text"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="billingEmail" className="caption1 capitalize">
                Email <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="billingEmail"
                type="email"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className={`tab_btn flex items-center justify-between w-full mt-10 pb-1.5 border-b border-line ${
            activeAddress === "shipping" ? "active" : ""
          }`}
          onClick={() => handleActiveAddress("shipping")}
        >
          <strong className="heading6">Shipping address</strong>
          <Icon.CaretDown className="text-2xl ic_down duration-300" />
        </button>
        <div
          className={`form_address ${
            activeAddress === "shipping" ? "block" : "hidden"
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-4 gap-y-5 mt-5">
            <div className="first-name">
              <label
                htmlFor="shippingFirstName"
                className="caption1 capitalize"
              >
                First Name <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingFirstName"
                type="text"
                required
              />
            </div>
            <div className="last-name">
              <label htmlFor="shippingLastName" className="caption1 capitalize">
                Last Name <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingLastName"
                type="text"
                required
              />
            </div>
            <div className="company">
              <label htmlFor="shippingCompany" className="caption1 capitalize">
                Company name (optional)
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingCompany"
                type="text"
                required
              />
            </div>
            <div className="country">
              <label htmlFor="shippingCountry" className="caption1 capitalize">
                Country / Region <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingCountry"
                type="text"
                required
              />
            </div>
            <div className="street">
              <label htmlFor="shippingStreet" className="caption1 capitalize">
                street address <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingStreet"
                type="text"
                required
              />
            </div>
            <div className="city">
              <label htmlFor="shippingCity" className="caption1 capitalize">
                Town / city <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingCity"
                type="text"
                required
              />
            </div>
            <div className="state">
              <label htmlFor="shippingState" className="caption1 capitalize">
                state <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingState"
                type="text"
                required
              />
            </div>
            <div className="zip">
              <label htmlFor="shippingZip" className="caption1 capitalize">
                ZIP <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingZip"
                type="text"
                required
              />
            </div>
            <div className="phone">
              <label htmlFor="shippingPhone" className="caption1 capitalize">
                Phone <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingPhone"
                type="text"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="shippingEmail" className="caption1 capitalize">
                Email <span className="text-red">*</span>
              </label>
              <input
                className="border-line mt-2 px-4 py-3 w-full rounded-lg"
                id="shippingEmail"
                type="email"
                required
              />
            </div>
          </div>
        </div>
        <div className="block-button lg:mt-10 mt-6">
          <button className="button-main">Update Address</button>
        </div>
      </form>
    </>
  );
};

export default Address;
