/** @format */

import OrderItemsTypes from "./OrderItemsType";
import ProductsTypes from "./ProductsType";
import ReviewsTypes from "./ReviewsType";

// Variants
export default interface VariantsTypes {
  id: string;
  product_id: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  variant_img?: string;
  product: ProductsTypes;
  review: ReviewsTypes[];
  order_item: OrderItemsTypes[];
}
