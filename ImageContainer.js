import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

export const ImageContainer = ({imageSource, onPress}) => {
  const [viewRef, setViewRef] = useState(React.createRef());
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
      collapsable={false}
    >
      <TouchableOpacity onPress={() => onPress(viewRef)}>
        <Image
          ref={setViewRef}
          style={{
            width: 350,
            resizeMode: 'contain',
          }}
          source={imageSource}
        />
      </TouchableOpacity>
    </View>
  );
};
