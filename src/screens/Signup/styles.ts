import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateVerticalScale(20),
    paddingBottom: moderateVerticalScale(30),
  },
  title: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
  },
  subtitle: {
    marginVertical: moderateVerticalScale(10),
    color: colors.text,
    fontSize: moderateScale(14),
  },
  button: {
    marginTop: moderateScale(10),
  },
  bottomText: {
    alignSelf: 'center',
    marginTop: moderateVerticalScale(30),
    fontSize: moderateScale(14),
    color: colors.text,
  },
  signUpText: {
    color: colors.secondary,
    fontSize: moderateScale(14),
  },
});
