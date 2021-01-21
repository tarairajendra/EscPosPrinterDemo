import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';
import {Button, View, Text} from 'react-native';
import {captureRef} from 'react-native-view-shot';

export const WebViewDemo = ({printMe}) => {
  const ref = useRef();
  return (
    <>
      <View ref={ref} collapsable={false}>
        <Text>Hello World</Text>
      </View>
      <Button
        title={'Print Me'}
        onPress={async () => {
          try {
            const uri = await captureRef(ref, {result: 'base64'});
            printMe(uri);
          } catch (e) {
            alert(e.message || 'ERROR');
          }
        }}
      />
    </>
  );
};
