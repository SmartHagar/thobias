/** @format */

import ProductsTypes from "./Products";

// productImages
export default interface ProductImagesTypes {
  id: string;
  product_id: string;
  is_main: any;
  product_img: string;
  product: ProductsTypes;
}
