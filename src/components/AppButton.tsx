import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {AppText} from './index';
import {colors} from '../utils/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

interface Props {
  title: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}

export default function AppButton({title, onPress, style, isLoading}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'white'} />
      ) : (
        <AppText style={styles.title}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    padding: moderateVerticalScale(15),
    borderRadius: moderateScale(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateVerticalScale(16),
    color: colors.primary,
  },
});
