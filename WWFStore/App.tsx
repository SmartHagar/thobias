/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import WebViewComponent from './src/components/WebViewComponent';
import {
  getFCMToken,
  requestUserPermission,
  setupForegroundHandler,
  setupBackgroundHandler,
} from './src/services/NotificationService';

function App(): React.JSX.Element {
  useEffect(() => {
    // Minta izin notifikasi saat aplikasi pertama kali dibuka
    requestUserPermission();
    // Setup listener untuk notifikasi
    getFCMToken();
    // Setup handlers
    const unsubscribeForeground = setupForegroundHandler();
    setupBackgroundHandler();

    return () => {
      unsubscribeForeground();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebViewComponent />
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
