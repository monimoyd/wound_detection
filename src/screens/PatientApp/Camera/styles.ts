import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    paddingBottom: moderateVerticalScale(20),
    backgroundColor: colors.primary,
    borderBottomLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
    zIndex: 1,
  },
  headerImage: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  headerTextContainer: {
    flex: 1,
    paddingLeft: moderateScale(10),
  },
  headerGreetingText: {
    color: colors.text2,
  },
  headerNameText: {
    color: 'black',
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  cameraFunctionsContainer: {
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    alignItems: 'center',
    padding: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  captureBtnBorder: {
    borderColor: colors.primary,
    borderWidth: 4,
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureBtn: {
    backgroundColor: colors.primary,
    height: moderateScale(55),
    width: moderateScale(55),
    borderRadius: moderateScale(70),
  },
});
