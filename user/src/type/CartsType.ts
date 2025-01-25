/** @format */

import ProductsTypes from "./ProductsType";
import VariantsTypes from "./VariantsType";

// Carts
export default interface CartsTypes {
  id: string;
  product_variant_id: string;
  product_id: string;
  user_id: string;
  quantity: number;
  product_variant: VariantsTypes;
  product: ProductsTypes;
}
