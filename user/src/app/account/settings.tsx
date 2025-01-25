/** @format */

import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const Settings = () => {
  return (
    <>
      <form>
        <div className="heading5 pb-4">Information</div>
        <div className="upload_image col-span-full">
          <label htmlFor="uploadImage">
            Upload Avatar: <span className="text-red">*</span>
          </label>
          <div className="flex flex-wrap items-center gap-5 mt-3">
            <div className="bg_img flex-shrink-0 relative w-[7.5rem] h-[7.5rem] rounded-lg overflow-hidden bg-surface">
              <span className="ph ph-image text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary"></span>
              <Image
                src={"/images/avatar/1.png"}
                width={300}
                height={300}
                alt="avatar"
                className="upload_img relative z-[1] w-full h-full object-cover"
              />
            </div>
            <div>
              <strong className="text-button">Upload File:</strong>
              <p className="caption1 text-secondary mt-1">JPG 120x120px</p>
              <div className="upload_file flex items-center gap-3 w-[220px] mt-3 px-3 py-2 border border-line rounded">
                <label
                  htmlFor="uploadImage"
                  className="caption2 py-1 px-3 rounded bg-line whitespace-nowrap cursor-pointer"
                >
                  Choose File
                </label>
                <input
                  type="file"
                  name="uploadImage"
                  id="uploadImage"
                  accept="image/*"
                  className="caption2 cursor-pointer"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 gap-y-5 mt-5">
          <div className="first-name">
            <label htmlFor="firstName" className="caption1 capitalize">
              First Name <span className="text-red">*</span>
            </label>
            <input
              className="border-line mt-2 px-4 py-3 w-full rounded-lg"
              id="firstName"
              type="text"
              defaultValue={"Tony"}
              placeholder="First name"
              required
            />
          </div>
          <div className="last-name">
            <label htmlFor="lastName" className="caption1 capitalize">
              Last Name <span className="text-red">*</span>
            </label>
            <input
              className="border-line mt-2 px-4 py-3 w-full rounded-lg"
              id="lastName"
              type="text"
              defaultValue={"Nguyen"}
              placeholder="Last name"
              required
            />
          </div>
          <div className="phone-number">
            <label htmlFor="phoneNumber" className="caption1 capitalize">
              Phone Number <span className="text-red">*</span>
            </label>
            <input
              className="border-line mt-2 px-4 py-3 w-full rounded-lg"
              id="phoneNumber"
              type="text"
              defaultValue={"(+12) 345 678 910"}
              placeholder="Phone number"
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email" className="caption1 capitalize">
              Email Address <span className="text-red">*</span>
            </label>
            <input
              className="border-line mt-2 px-4 py-3 w-full rounded-lg"
              id="email"
              type="email"
              defaultValue={"hi.avitex@gmail.com"}
              placeholder="Email address"
              required
            />
          </div>
          <div className="gender">
            <label htmlFor="gender" className="caption1 capitalize">
              Gender <span className="text-red">*</span>
            </label>
            <div className="select-block mt-2">
              <select
                className="border border-line px-4 py-3 w-full rounded-lg"
                id="gender"
                name="gender"
                defaultValue={"default"}
              >
                <option value="default" disabled>
                  Choose Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <Icon.CaretDown className="arrow-down text-lg" />
            </div>
          </div>
          <div className="birth">
            <label htmlFor="birth" className="caption1">
              Day of Birth <span className="text-red">*</span>
            </label>
            <input
              className="border-line mt-2 px-4 py-3 w-full rounded-lg"
              id="birth"
              type="date"
              placeholder="Day of Birth"
              required
            />
          </div>
        </div>
        <div className="heading5 pb-4 lg:mt-10 mt-6">Change Password</div>
        <div className="pass">
          <label htmlFor="password" className="caption1">
            Current password <span className="text-red">*</span>
          </label>
          <input
            className="border-line mt-2 px-4 py-3 w-full rounded-lg"
            id="password"
            type="password"
            placeholder="Password *"
            required
          />
        </div>
        <div className="new-pass mt-5">
          <label htmlFor="newPassword" className="caption1">
            New password <span className="text-red">*</span>
          </label>
          <input
            className="border-line mt-2 px-4 py-3 w-full rounded-lg"
            id="newPassword"
            type="password"
            placeholder="New Password *"
            required
          />
        </div>
        <div className="confirm-pass mt-5">
          <label htmlFor="confirmPassword" className="caption1">
            Confirm new password <span className="text-red">*</span>
          </label>
          <input
            className="border-line mt-2 px-4 py-3 w-full rounded-lg"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password *"
            required
          />
        </div>
        <div className="block-button lg:mt-10 mt-6">
          <button className="button-main">Save Change</button>
        </div>
      </form>
    </>
  );
};

export default Settings;
