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
    borderBottomLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
    zIndex: 1,
    position: 'absolute',
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
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: moderateScale(10),
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  btnStyle: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },
});
