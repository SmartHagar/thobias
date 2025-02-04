/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import WebViewComponent from './src/components/WebViewComponent';
import axios from 'axios';
import {
  getFCMToken,
  requestUserPermission,
  setupForegroundHandler,
  setupBackgroundHandler,
  checkNotificationPermission,
} from './src/services/NotificationService';

function App(): React.JSX.Element {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    let unsubscribeForeground: () => void;

    const checkPermission = async () => {
      try {
        const hasPermission = await checkNotificationPermission();
        if (!hasPermission) {
          await requestUserPermission();
        }

        const token = await getFCMToken();
        if (token) {
          setFcmToken(token);
        }
        unsubscribeForeground = setupForegroundHandler();
        setupBackgroundHandler();
      } catch (error) {
        console.error('Error setting up notifications:', error);
      }
    };

    checkPermission();

    return () => {
      if (unsubscribeForeground) {
        unsubscribeForeground();
      }
    };
  }, []);

  console.log({fcmToken});

  useEffect(() => {
    if (userData) {
      //  parse user data
      const parsedUserData = JSON.parse(userData);
      const row = {
        user_id: parsedUserData.id,
        fcm_token: fcmToken,
      };
      //  send with axios request to https://back-wwf.sitoko.my.id/crud/deviceTokens
      axios.post('https://back-wwf.sitoko.my.id/crud/deviceTokens', row);
      console.log('sendata');
    }
  }, [fcmToken, userData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebViewComponent setUserData={setUserData} />
    </SafeAreaView>
  );
}

const backgroundStyle = {
  backgroundColor: '#D2EF9A',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
