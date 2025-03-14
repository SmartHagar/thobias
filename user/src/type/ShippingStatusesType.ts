/** @format */

import OrdersTypes from "./OrdersType";

// shippingStatuses
export default interface ShippingStatusesTypes {
  id: string;
  order_id: string;
  user_id: string;
  order: OrdersTypes;
  status: string;
}
