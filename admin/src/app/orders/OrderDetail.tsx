/** @format */

import ModalDefault from "@/components/modal/ModalDefault";
import Order from "@/components/shop/Order";
import OrdersTypes from "@/types/Orders";
import React from "react";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  order?: OrdersTypes;
};

const OrderDetail = ({ showModal, setShowModal, order }: Props) => {
  return (
    <ModalDefault
      title={`Detail Order`}
      showModal={showModal}
      setShowModal={setShowModal}
      width="md:w-[50rem] lg:w-[65rem]"
    >
      <div className="flex justify-center items-center flex-col">
        <p className="capitalize font-bold">{order?.shipping_status?.status}</p>
        <div className="self-start my-4">
          <table>
            <tbody>
              <tr>
                <td valign="top">Kecamatan-Kelurahan</td>
                <td valign="top">:</td>
                <td valign="top">
                  {order?.village.sub_district.sub_district_nm}-
                  {order?.village.village_nm}
                </td>
              </tr>
              <tr>
                <td valign="top">Alamat</td>
                <td valign="top">:</td>
                <td valign="top">{order?.address}</td>
              </tr>
              <tr>
                <td valign="top">No. HP</td>
                <td valign="top">:</td>
                <td valign="top">{order?.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" w-full">
          <Order dtOrders={order as any} />
        </div>
      </div>
    </ModalDefault>
  );
};

export default OrderDetail;
