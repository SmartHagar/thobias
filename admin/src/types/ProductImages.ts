/** @format */

import ProductVariantsTypes from "./Variants";

// productImages
export default interface ProductImagesTypes {
  id: string;
  product_variant_id: string;
  is_main: boolean | number;
  product_img: string;
  product_variant: ProductVariantsTypes;
}
