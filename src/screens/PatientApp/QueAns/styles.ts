import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  progressContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    marginTop: moderateVerticalScale(30),
  },
  progressCountContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(5),
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: moderateScale(10),
  },
  progressBarBorder: {
    width: '70%',
    height: moderateVerticalScale(10),
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: moderateScale(3),
    overflow: 'hidden',
    marginLeft: moderateScale(20),
  },
  progressBar: {
    height: moderateVerticalScale(8),
    backgroundColor: colors.secondary,
    borderRadius: moderateScale(3),
  },
  queAnsContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
    paddingHorizontal: moderateScale(15),
  },
  question: {
    fontSize: moderateScale(19),
    fontWeight: '500',
    textAlign: 'center',
    color: 'black',
  },
  btnContainer: {
    marginTop: '30%',
    width: '100%',
  },
  btn: {
    marginTop: moderateVerticalScale(10),
    paddingVertical: moderateVerticalScale(10),
  },
});
