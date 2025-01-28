/** @format */

import { User } from ".";
import OrderItemsTypes from "./OrderItemsType";
import ReviewsTypes from "./ReviewsType";
import ShippingStatusesTypes from "./ShippingStatusesType";

// orders
export default interface OrdersTypes {
  id: string;
  user_id: string;
  shpipping_cost_id: string;
  total_price: number;
  total_payment: number;
  status: string;
  address: string;
  order_items: OrderItemsTypes[];
  snap_token: string;
  created_at: string;
  shipping_cost: number;
  shipping_status?: ShippingStatusesTypes;
  review: ReviewsTypes[];
  user: User;
}
