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
  created_at: string;
}

export default NotificationsTypes;
