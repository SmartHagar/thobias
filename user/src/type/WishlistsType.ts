/** @format */

import ProductsTypes from "./ProductsType";

// wishlists
export default interface WishlistsTypes {
  id: string;
  product_id: string;
  user_id: string;
  product: ProductsTypes;
}
