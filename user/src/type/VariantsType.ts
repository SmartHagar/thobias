/** @format */

import OrderItemsTypes from "./OrderItemsType";
import ProductImagesTypes from "./ProductImagesType";
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
  product: ProductsTypes;
  product_image: ProductImagesTypes[];
  review: ReviewsTypes[];
  order_item: OrderItemsTypes[];
}
