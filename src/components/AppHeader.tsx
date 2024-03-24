import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {BackArrow} from '../assets/svg';
import {colors} from '../utils/colors';
import {AppText} from './index';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title?: any;
  onBackPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle>;
}

export default function AppHeader({title, onBackPress, style}: Props) {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.header,
        {paddingTop: top + moderateVerticalScale(10)},
        style,
      ]}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBackPress ?? (() => navigation.goBack())}>
        <BackArrow />
      </TouchableOpacity>
      {title ? <AppText style={styles.title}>{title}</AppText> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateVerticalScale(20),
    marginLeft: moderateScale(20),
    fontWeight: '500',
    color: 'black',
  },
  backButton: {
    backgroundColor: colors.primary,
    borderColor: colors.greyBorder,
    borderWidth: 2,
    padding: moderateVerticalScale(10),
    borderRadius: moderateScale(12),
  },
});
