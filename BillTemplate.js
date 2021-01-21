import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
import {captureRef} from 'react-native-view-shot';
import {BluetoothEscposPrinter} from 'react-native-bluetooth-escpos-printer';
import {WebView} from 'react-native-webview';

export const BillTemplate = ({getUri}) => {
  const ref = useRef();
  const [uri, setUri] = useState();

  return (
    <>
      <View>
        {uri && (
          <Image
            style={{
              width: '100%',
              height: 100,
              borderWidth: 1,
              borderColor: '#000',
              overflow: 'visible',
              resizeMode: 'contain',
            }}
            source={{uri: 'data:image/png;base64,' + uri}}
          />
        )}
      </View>
      <View ref={ref} collapsable={false} style={styles.container}>
        <View style={styles.distributor}>
          <Text>Diksha Enterprise</Text>
          <Text>Erangel, Pubg</Text>
          <Text>TEL: 1234567890</Text>
          <Text>GST: 123ASD4342KAS</Text>
        </View>
        <View style={styles.retailer}>
          <Text>Invoice Number: 12536712673561623</Text>
          <Text>Shop Code: GUJ00123123</Text>
          <Text>GSTIN: SDA216371JS23</Text>
          <Text>Shop Name: Shetty Traders</Text>
          <Text>Shop Address: HSR Layout</Text>
          <Text>Date & Time: 02 DEC 2020 01:10 AM</Text>
          <Text>Route: (CBE-0041:CBE-0041)</Text>
        </View>
        {/*<View style={styles.retailer}>
          <Text>Invoice Number: 12536712673561623</Text>
          <Text>Shop Code: GUJ00123123</Text>
          <Text>GSTIN: SDA216371JS23</Text>
          <Text>Shop Name: Shetty Traders</Text>
          <Text>Shop Address: HSR Layout</Text>
          <Text>Date & Time: 02 DEC 2020 01:10 AM</Text>
          <Text>Route: (CBE-0041:CBE-0041)</Text>
        </View>
        <View style={styles.retailer}>
          <Text>Invoice Number: 12536712673561623</Text>
          <Text>Shop Code: GUJ00123123</Text>
          <Text>GSTIN: SDA216371JS23</Text>
          <Text>Shop Name: Shetty Traders</Text>
          <Text>Shop Address: HSR Layout</Text>
          <Text>Date & Time: 02 DEC 2020 01:10 AM</Text>
          <Text>Route: (CBE-0041:CBE-0041)</Text>
        </View>
        <View style={styles.retailer}>
          <Text>Invoice Number: 12536712673561623</Text>
          <Text>Shop Code: GUJ00123123</Text>
          <Text>GSTIN: SDA216371JS23</Text>
          <Text>Shop Name: Shetty Traders</Text>
          <Text>Shop Address: HSR Layout</Text>
          <Text>Date & Time: 02 DEC 2020 01:10 AM</Text>
          <Text>Route: (CBE-0041:CBE-0041)</Text>
        </View>
        <View style={styles.retailer}>
          <Text>Invoice Number: 12536712673561623</Text>
          <Text>Shop Code: GUJ00123123</Text>
          <Text>GSTIN: SDA216371JS23</Text>
          <Text>Shop Name: Shetty Traders</Text>
          <Text>Shop Address: HSR Layout</Text>
          <Text>Date & Time: 02 DEC 2020 01:10 AM</Text>
          <Text>Route: (CBE-0041:CBE-0041)</Text>
        </View>
        <View style={styles.retailer}>
          <Text>Invoice Number: 12536712673561623</Text>
          <Text>Shop Code: GUJ00123123</Text>
          <Text>GSTIN: SDA216371JS23</Text>
          <Text>Shop Name: Shetty Traders</Text>
          <Text>Shop Address: HSR Layout</Text>
          <Text>Date & Time: 02 DEC 2020 01:10 AM</Text>
          <Text>Route: (CBE-0041:CBE-0041)</Text>
        </View>
        <View style={styles.retailer}>
          <Text>Invoice Number: 12536712673561623</Text>
          <Text>Shop Code: GUJ00123123</Text>
          <Text>GSTIN: SDA216371JS23</Text>
          <Text>Shop Name: Shetty Traders</Text>
          <Text>Shop Address: HSR Layout</Text>
          <Text>Date & Time: 02 DEC 2020 01:10 AM</Text>
          <Text>Route: (CBE-0041:CBE-0041)</Text>
        </View>
        <View style={styles.retailer}>
          <Text>Invoice Number: 12536712673561623</Text>
          <Text>Shop Code: GUJ00123123</Text>
          <Text>GSTIN: SDA216371JS23</Text>
          <Text>Shop Name: Shetty Traders</Text>
          <Text>Shop Address: HSR Layout</Text>
          <Text>Date & Time: 02 DEC 2020 01:10 AM</Text>
          <Text>Route: (CBE-0041:CBE-0041)</Text>
        </View>*/}
      </View>
      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button
          title="Capture"
          onPress={async () => {
            try {
              const uri = await captureRef(ref, {
                format: 'png',
                result: 'base64',
              });
              setUri(uri);
              getUri(uri);
            } catch (e) {
              alert(e.message || 'ERROR');
            }
          }}
        />
        <Button
          title={'Print'}
          onPress={async () => {
            try {
              await BluetoothEscposPrinter.setWidth(565);
              await BluetoothEscposPrinter.printPic(uri, {});
            } catch (e) {
              alert(e.message || 'ERROR');
            }
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  distributor: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 5,
  },
  retailer: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});
