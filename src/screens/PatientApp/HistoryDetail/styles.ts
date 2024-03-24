import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  screenContentContainer: {
    paddingHorizontal: moderateScale(15),
  },
  imageContainer: {
    marginTop: moderateVerticalScale(15),
    height: Dimensions.get('screen').width / 1.4,
    width: Dimensions.get('screen').width / 2,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
  },
  title: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    marginTop: moderateVerticalScale(15),
  },
  qaCard: {
    width: '100%',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(15),
    backgroundColor: '#F7F8F9',
    borderRadius: moderateScale(10),
    marginTop: moderateVerticalScale(15),
  },
  answerContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 3,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(5),
    alignSelf: 'flex-end',
    marginTop: moderateVerticalScale(10),
  },
  question: {
    color: 'black',
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
  answer: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(15),
  },
  btn: {
    width: '48%',
    paddingVertical: moderateVerticalScale(10),
  },
});
