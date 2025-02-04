/** @format */

import OrderItemsTypes from "./OrderItems";
import ProductImagesTypes from "./ProductImages";
import ReviewsTypes from "./Reviews";
import SubCategoriesTypes from "./SubCategories";
import VariantsTypes from "./Variants";

// Products
export default interface ProductsTypes {
  id: string;
  sub_category_id: string;
  product_nm: string;
  product_desc: string;
  has_variants: boolean;
  price: number | string;
  stock: number | string;
  subCategory: SubCategoriesTypes;
  product_image: ProductImagesTypes[];
  review: ReviewsTypes[];
  order_item: OrderItemsTypes[];
  product_variant: VariantsTypes[];
}
