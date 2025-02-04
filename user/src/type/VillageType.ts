/** @format */

import SubDistrictsTypes from "./SubDistrictsType";

export default interface VillageTypes {
  id: string;
  sub_district_id: string;
  village_nm: string;
  shipping_cost: number;
  sub_district: SubDistrictsTypes;
}
