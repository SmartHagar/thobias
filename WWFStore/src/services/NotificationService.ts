import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native'; // Anda perlu menginstall package ini

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getFCMToken = async () => {
  const token = await messaging().getToken();
  console.log('FCM Token:', token);
};

// Fungsi untuk menampilkan notifikasi foreground
async function onDisplayNotification(remoteMessage) {
  // Buat channel untuk Android
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Tampilkan notifikasi
  await notifee.displayNotification({
    title: remoteMessage.notification.title,
    body: remoteMessage.notification.body,
    android: {
      channelId,
      // Tambahan konfigurasi Android jika diperlukan
      smallIcon: 'ic_launcher', // pastikan icon ini ada di android/app/src/main/res/
      pressAction: {
        id: 'default',
      },
    },
  });
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
};
