/** @format */

import { User } from ".";
import OrderItemsTypes from "./OrderItems";
import ReviewsTypes from "./Reviews";
import ShippingStatusesTypes from "./ShippingStatuses";
import VillageTypes from "./Village";

// orders
export default interface OrdersTypes {
  id: string;
  user_id: string;
  shpipping_cost_id: string;
  total_price: number;
  total_payment: number;
  status: string;
  address: string;
  phone: string;
  order_items: OrderItemsTypes[];
  snap_token: string;
  created_at: string;
  shipping_cost: number;
  village: VillageTypes;
  shipping_status?: ShippingStatusesTypes;
  review: ReviewsTypes[];
  user: User;
}
