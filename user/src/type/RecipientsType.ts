/** @format */

import VillageTypes from "./VillageType";

// recipients
export default interface RecipientsTypes {
  id?: string;
  user_id: string;
  village_id: string;
  village?: VillageTypes;
  nm_recipient: string;
  phone: string;
  address: string;
  is_active?: boolean;
}
