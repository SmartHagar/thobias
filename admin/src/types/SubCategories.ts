/** @format */

import CategoriesTypes from "./Categories";

export default interface SubCategoriesTypes {
  id: string;
  category_id: string;
  sub_category_nm: string;
  category: CategoriesTypes;
}
