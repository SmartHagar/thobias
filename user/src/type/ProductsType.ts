/** @format */

import OrderItemsTypes from "./OrderItemsType";
import ProductImagesTypes from "./ProductImagesType";
import ReviewsTypes from "./ReviewsType";
import SubCategoriesTypes from "./SubCategoriesType";
import VariantsTypes from "./VariantsType";

// Products
export default interface ProductsTypes {
  id: string;
  sub_category_id: string;
  product_nm: string;
  product_desc: string;
  subCategory: SubCategoriesTypes;
  review: ReviewsTypes[];
  order_item: OrderItemsTypes[];
  product_variant: VariantsTypes[];
  product_image: ProductImagesTypes[];
}
