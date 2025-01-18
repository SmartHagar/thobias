/** @format */

import OrderItemsTypes from "./OrderItems";
import ProductImagesTypes from "./ProductImages";
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
  product: ProductsTypes;
  product_variant_images: ProductImagesTypes[];
  review: ReviewsTypes[];
  order_item: OrderItemsTypes[];
}
