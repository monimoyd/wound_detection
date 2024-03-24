import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: moderateVerticalScale(20),
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
  screenContentContainer: {
    paddingHorizontal: moderateScale(20),
  },
  saShadowContainer: {
    shadowOffset: {
      height: 8,
      width: 5,
    },
    shadowColor: '#1A998E',
    shadowRadius: 16,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  saCard: {
    backgroundColor: colors.blue,
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'flex-end',
  },
  saCardContentContainer: {
    padding: moderateVerticalScale(15),
    alignItems: 'flex-start',
    width: '70%',
  },
  saTitle: {
    color: colors.primary,
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  saDesc: {
    color: colors.primary,
    fontSize: moderateScale(11),
    fontWeight: '300',
    marginVertical: moderateVerticalScale(7),
  },
  saImageContainer: {
    width: Dimensions.get('screen').width / 2.7,
    height: Dimensions.get('screen').width / 3.5,
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  saDoctorImg: {
    width: '100%',
    height: '100%',
  },
  saCheckNowContainer: {
    backgroundColor: 'white',
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(50),
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  sectionTitle: {
    color: 'black',
    fontSize: moderateScale(16),
  },
  seeAllText: {
    color: colors.text2,
    fontSize: moderateScale(12),
  },
  tipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: moderateVerticalScale(20),
  },
  tipCardContainer: {
    backgroundColor: '#F7F8F9',
    width: '48%',
    marginTop: moderateScale(15),
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    borderColor: '#E8ECF4',
    borderWidth: 1,
  },
  tipsDescText: {
    color: colors.text2,
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
  },
  tipCardImage: {
    width: '40%',
    height: moderateVerticalScale(60),
  },
});
