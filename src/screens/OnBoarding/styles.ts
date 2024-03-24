import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    // paddingHorizontal: moderateScale(30),
    paddingVertical: moderateVerticalScale(20),
  },
  title: {
    textAlign: 'center',
    fontSize: moderateVerticalScale(26),
    fontWeight: '500',
    color: colors.secondary,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: moderateVerticalScale(14),
    marginVertical: moderateVerticalScale(20),
    color: colors.secondary,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: moderateScale(55),
  },
  dot: {
    height: moderateScale(10),
    width: moderateScale(10),
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: moderateScale(10),
  },
  activeDot: {
    height: moderateScale(15),
    width: moderateScale(15),
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderRadius: moderateScale(10),
  },
  button: {
    marginHorizontal: moderateScale(20),
  },
});
