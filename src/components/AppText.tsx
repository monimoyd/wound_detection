import React from 'react';
import {GestureResponderEvent, StyleProp, Text, TextStyle} from 'react-native';

interface Props {
  children?: React.ReactNode | undefined;
  style?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function AppText({children, style, onPress}: Props) {
  return (
    <Text style={[{color: 'black'}, style]} onPress={onPress}>
      {children}
    </Text>
  );
}
