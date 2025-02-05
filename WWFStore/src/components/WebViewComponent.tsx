import {
  BackHandler,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import WebView, {WebViewNavigation} from 'react-native-webview';

// Mendefinisikan tipe untuk WebView ref
type WebViewRef = WebView & {
  goBack: () => void;
  goForward: () => void;
};

interface Props {
  setUserData: (data: any) => void;
}

const WebViewComponent = ({setUserData}: Props) => {
  const [canGoBack, setCanGoBack] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState(false);
  const webViewRef = useRef<WebViewRef>(null);
  const [lastBackPressed, setLastBackPressed] = useState<number>(0);
  const [isRefresh, setIsRefresh] = useState<boolean>(true);

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

  const onRefresh = () => {
    setRefreshing(true);
    // webViewRef.current?.reload();
    setRefreshing(false);
  };

  const onScrollWebView = (event: any) => {
    const {contentOffset} = event.nativeEvent;
    if (contentOffset.y === 0) {
      setIsRefresh(true);
    } else {
      setIsRefresh(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          enabled={isRefresh}
        />
      }>
      <WebView
        ref={webViewRef as any}
        source={{uri: 'https://wwf.sitoko.my.id'}}
        style={styles.container}
        onNavigationStateChange={onNavigationStateChange}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={onWebViewMessage}
        onScroll={event => {
          onScrollWebView(event);
        }}
      />
    </ScrollView>
  );
};

export default WebViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
