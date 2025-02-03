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

const WebViewComponent = () => {
  const [canGoBack, setCanGoBack] = useState<boolean>(false);
  const webViewRef = useRef<WebViewRef>(null);
  const [lastBackPressed, setLastBackPressed] = useState<number>(0);

  const [userData, setUserData] = useState<any>(null);

  const onWebViewMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      setUserData(data);
    } catch (error) {
      console.error('Error parsing WebView message:', error);
    }
  };

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

  console.log({userData});

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef as any}
        source={{uri: 'https://wwf.sitoko.my.id'}}
        style={styles.webview}
        onNavigationStateChange={onNavigationStateChange}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={onWebViewMessage}
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
