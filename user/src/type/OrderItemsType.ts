/** @format */

import OrdersTypes from "./OrdersType";
import ProductsTypes from "./ProductsType";
import VariantsTypes from "./VariantsType";

// orderItems
export default interface OrderItemsTypes {
  id: string;
  product_variant_id: string;
  user_id: string;
  order_id: string;
  quantity: number;
  total_price: number;
  product_id: string;
  product_variant: VariantsTypes;
  order: OrdersTypes;
  product: ProductsTypes;
}
