import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    paddingTop: moderateVerticalScale(20),
    paddingBottom: moderateVerticalScale(30),
    paddingHorizontal: moderateScale(7),
  },
  title: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    alignItems: 'center',
    flex: 1,
    borderColor: colors.greyBorder,
    borderWidth: 1,
    marginHorizontal: moderateScale(7),
    borderRadius: 10,
  },
  cardImg: {height: Dimensions.get('screen').width / 3, width: '100%'},
});
