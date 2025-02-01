import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance} from '@notifee/react-native'; // Anda perlu menginstall package ini
import {Alert, Linking} from 'react-native';

async function requestUserPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      return true;
    }

    Alert.alert(
      'Notifikasi Dinonaktifkan',
      'Mohon aktifkan notifikasi di pengaturan untuk mendapatkan informasi penting dari aplikasi.',
      [
        {
          text: 'Buka Pengaturan',
          onPress: () => Linking.openSettings(),
        },
        {
          text: 'Nanti Saja',
          style: 'cancel',
        },
      ],
    );
    return false;
  } catch (error) {
    console.error('Error requesting permission:', error);
    return false;
  }
}

const getFCMToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Error getting FCM token:', error);
    return null;
  }
};

// Tambahkan fungsi untuk cek status izin saat ini
const checkNotificationPermission = async () => {
  const authStatus = await messaging().hasPermission();
  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
};

// Fungsi untuk menampilkan notifikasi foreground
async function onDisplayNotification(remoteMessage: any) {
  try {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      title: remoteMessage.notification?.title,
      body: remoteMessage.notification?.body,
      data: remoteMessage.data,
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        pressAction: {
          id: 'default',
        },
        importance: AndroidImportance.HIGH,
        sound: 'default',
      },
      ios: {
        sound: 'default',
      },
    });
  } catch (error) {
    console.error('Error displaying notification:', error);
  }
}

// Setup foreground handler
function setupForegroundHandler() {
  return messaging().onMessage(async remoteMessage => {
    console.log('Received foreground message:', remoteMessage);
    await onDisplayNotification(remoteMessage);
  });
}

// Setup background/quit handler
function setupBackgroundHandler() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Received background message:', remoteMessage);
    // Tidak perlu memanggil onDisplayNotification di sini
    // karena FCM sudah menangani notifikasi di background
  });
}
export {
  requestUserPermission,
  getFCMToken,
  setupForegroundHandler,
  setupBackgroundHandler,
  checkNotificationPermission,
};
