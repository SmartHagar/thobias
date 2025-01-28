/** @format */

import { User } from ".";
import OrdersTypes from "./OrdersType";
import ProductsTypes from "./ProductsType";
import VariantsTypes from "./VariantsType";
// reviews
export default interface ReviewsTypes {
  id: string;
  product_id: string;
  product_variant_id: string;
  user_id: string;
  order_id: string;
  rating: string;
  comment: string;
  product: ProductsTypes;
  product_variant: VariantsTypes;
  order: OrdersTypes;
  user: User;
}
