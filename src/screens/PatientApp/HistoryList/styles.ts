import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  reportCard: {
    flexDirection: 'row',
    backgroundColor: '#F7F8F9',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(10),
    alignItems: 'center',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: '#E8ECF4',
    marginTop: moderateVerticalScale(15),
  },
  reportText: {
    color: 'black',
    fontSize: moderateScale(14),
  },
  screenContentContainer: {
    paddingHorizontal: moderateScale(15),
  },
  contentContainer: {
    marginLeft: moderateScale(10),
  },
  infectionText: {
    marginTop: moderateVerticalScale(5),
    color: '#F9B234',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  errorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: colors.blue,
    fontSize: moderateScale(18),
  },
});
