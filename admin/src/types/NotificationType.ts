/** @format */

interface NotificationsTypes {
  id: string;
  type: string;
  data: string;
  read: boolean;
  notifiable?: {
    status?: string;
    total_payment?: number;
  };
}

export default NotificationsTypes;
