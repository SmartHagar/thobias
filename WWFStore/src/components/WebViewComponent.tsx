import {
  BackHandler,
  Platform,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import WebView, {WebViewNavigation} from 'react-native-webview';

// Mendefinisikan tipe untuk WebView ref
type WebViewRef = WebView & {
  goBack: () => void;
  goForward: () => void;
};

interface Props {
  fcmToken: string | null;
}

const WebViewComponent = ({fcmToken}: Props) => {
  const [canGoBack, setCanGoBack] = useState<boolean>(false);
  const webViewRef = useRef<WebViewRef>(null);
  const [lastBackPressed, setLastBackPressed] = useState<number>(0);

  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.postMessage(
        JSON.stringify({
          type: 'FCM_TOKEN',
          token: fcmToken,
        }),
      );
    }
  }, [fcmToken]);

  const showExitToast = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show('Tekan sekali lagi untuk keluar', ToastAndroid.SHORT);
    } else {
      console.log('Tekan sekali lagi untuk keluar');
    }
  };

  const handleBackPress = useCallback(() => {
    if (canGoBack && webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    } else {
      const currentTime = new Date().getTime();
      if (currentTime - lastBackPressed < 2000) {
        BackHandler.exitApp();
        return true;
      }

      setLastBackPressed(currentTime);
      showExitToast();
      return true;
    }
  }, [canGoBack, lastBackPressed]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove();
    };
  }, [handleBackPress]);

  const onNavigationStateChange = (navState: WebViewNavigation) => {
    setCanGoBack(navState.canGoBack);
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef as any}
        // source={{uri: 'https://wwf.sitoko.my.id'}}
        source={{uri: 'http://localhost:3099'}}
        style={styles.webview}
        onNavigationStateChange={onNavigationStateChange}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

export default WebViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -25}, {translateY: -25}],
  },
});
