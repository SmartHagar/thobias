/** @format */

import React, { useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
// import Image from "next/image";
import Link from "next/link";
import Dashboard from "./dashboard";
import Orders from "./orders";
import Address from "./address";
import Settings from "./settings";
import { useSearchParams } from "next/navigation";
import useOrdersApi from "@/store/api/Orders";

type Props = {
  dtUser: any;
};

const Profile = ({ dtUser }: Props) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<string | undefined>("dashboard");

  // store
  const { setOrdersAll } = useOrdersApi();

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
    if (tab === "dashboard") {
      setOrdersAll({ user_id: dtUser.user.id });
    }
  }, [dtUser.user.id, setOrdersAll, tab]);

  return (
    <div className="profile-block md:py-20 py-5">
      <div className="container">
        <div className="content-main flex gap-y-5 max-md:flex-col w-full">
          <div className="left md:w-1/3 w-full xl:pr-[3.125rem] lg:pr-[28px] md:pr-[16px]">
            <div className="user-infor bg-surface lg:px-7 px-4 lg:py-10 py-5 md:rounded-[20px] rounded-xl">
              <div className="heading flex flex-col items-center justify-center">
                {/* <div className="avatar">
                  <Image
                    src={"/images/avatar/1.png"}
                    width={300}
                    height={300}
                    alt="avatar"
                    className="md:w-[140px] w-[120px] md:h-[140px] h-[120px] rounded-full"
                  />
                </div> */}
                <div className="name heading6 mt-4 text-center">
                  {dtUser?.user?.name}
                </div>
                <div className="mail heading6 font-normal normal-case text-secondary text-center mt-1">
                  {dtUser?.user?.email}
                </div>
              </div>
              <div className="menu-tab w-full max-w-none lg:mt-10 mt-6">
                <Link
                  href={"?tab=dashboard"}
                  scroll={false}
                  className={`item flex items-center gap-3 w-full px-5 py-2 rounded-lg cursor-pointer duration-300 hover:bg-white ${
                    activeTab === "dashboard" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <Icon.HouseLine size={20} />
                  <strong className="heading6">Dashboard</strong>
                </Link>
                <Link
                  href={"?tab=orders"}
                  scroll={false}
                  className={`item flex items-center gap-3 w-full px-5 py-2 rounded-lg cursor-pointer duration-300 hover:bg-white mt-1.5 ${
                    activeTab === "orders" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  <Icon.Package size={20} />
                  <strong className="heading6">Riwayat Pesan</strong>
                </Link>
                <Link
                  href={"?tab=address"}
                  scroll={false}
                  className={`item flex items-center gap-3 w-full px-5 py-2 rounded-lg cursor-pointer duration-300 hover:bg-white mt-1.5 ${
                    activeTab === "address" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("address")}
                >
                  <Icon.Tag size={20} />
                  <strong className="heading6">Penerima</strong>
                </Link>
                {/* <Link
                  href={"?tab=setting"}
                  scroll={false}
                  className={`item flex items-center gap-3 w-full px-5 py-4 rounded-lg cursor-pointer duration-300 hover:bg-white mt-1.5 ${
                    activeTab === "setting" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("setting")}
                >
                  <Icon.GearSix size={20} />
                  <strong className="heading6">Setting</strong>
                </Link> */}
                <Link
                  href={"/login"}
                  className="item flex items-center gap-3 w-full px-5 py-2 rounded-lg cursor-pointer duration-300 hover:bg-white mt-1.5"
                >
                  <Icon.SignOut size={20} />
                  <strong className="heading6">Logout</strong>
                </Link>
              </div>
            </div>
          </div>
          <div className="right md:w-2/3 w-full pl-2.5">
            {/* if dashboard active */}
            <div
              className={`tab text-content w-full ${
                activeTab === "dashboard" ? "block" : "hidden"
              }`}
            >
              <Dashboard />
            </div>
            {/* if orders active */}
            <div
              className={`tab text-content overflow-hidden w-full p-7 border border-line rounded-xl ${
                activeTab === "orders" ? "block" : "hidden"
              }`}
            >
              <Orders dtUser={dtUser} activeTab={activeTab} />
            </div>
            {/* if address active */}
            <div
              className={`tab_address text-content w-full p-7 border border-line rounded-xl ${
                activeTab === "address" ? "block" : "hidden"
              }`}
            >
              <Address dtUser={dtUser} activeTab={activeTab} />
            </div>
            {/* if setting active */}
            <div
              className={`tab text-content w-full p-7 border border-line rounded-xl ${
                activeTab === "setting" ? "block" : "hidden"
              }`}
            >
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
