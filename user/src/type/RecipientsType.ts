/** @format */

import VillageTypes from "./VillageType";

// userInfo
export default interface UserInfoTypes {
  id: string;
  user_id: string;
  village_id: string;
  village: VillageTypes;
  nm_user: string;
  phone_number: string;
  address: string;
  is_active: boolean;
}
