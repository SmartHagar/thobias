/** @format */

import OrderItemsTypes from "./OrderItems";
import ProductsTypes from "./Products";
import ReviewsTypes from "./Reviews";

// Variants
export default interface VariantsTypes {
  id: string;
  product_id: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  variant_img: string;
  product: ProductsTypes;
  review: ReviewsTypes[];
  order_item: OrderItemsTypes[];
}
