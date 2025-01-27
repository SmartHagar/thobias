/** @format */

import React, { useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import useOrdersApi from "@/store/api/Orders";
import OrdersTypes from "@/type/OrdersType";

const Dashboard = () => {
  // store
  const { dtOrders } = useOrdersApi();
  // state
  const [orderProses, setOrderProses] = useState(0);
  const [orderCancel, setOrderCancel] = useState(0);

  useEffect(() => {
    if (dtOrders?.data) {
      const shippingStatus = ["dikemas", "dikirim"];
      const proses = dtOrders?.data?.filter((item: OrdersTypes) =>
        shippingStatus.includes(item?.shipping_status?.status)
      );
      const cancel = dtOrders?.data?.filter(
        (item: OrdersTypes) => item.status === "batal"
      );
      setOrderProses(proses?.length || 0);
      setOrderCancel(cancel?.length || 0);
    }
  }, [dtOrders]);

  return (
    <>
      <div className="overview grid sm:grid-cols-3 gap-5">
        <div className="item flex items-center justify-between p-5 border border-line rounded-lg box-shadow-xs">
          <div className="counter">
            <span className="text-secondary">Proses</span>
            <h5 className="heading5 mt-1">{orderProses}</h5>
          </div>
          <Icon.HourglassMedium className="text-4xl" />
        </div>
        <div className="item flex items-center justify-between p-5 border border-line rounded-lg box-shadow-xs">
          <div className="counter">
            <span className="text-secondary">Order Batal</span>
            <h5 className="heading5 mt-1">{orderCancel}</h5>
          </div>
          <Icon.ReceiptX className="text-4xl" />
        </div>
        <div className="item flex items-center justify-between p-5 border border-line rounded-lg box-shadow-xs">
          <div className="counter">
            <span className="text-secondary">Jumlah Order</span>
            <h5 className="heading5 mt-1">{dtOrders?.data?.length || 0}</h5>
          </div>
          <Icon.Package className="text-4xl" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
