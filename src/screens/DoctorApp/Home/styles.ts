import {StyleSheet} from 'react-native';
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
    paddingBottom: moderateVerticalScale(20),
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: moderateScale(17),
    borderBottomRightRadius: moderateScale(17),
    shadowOffset: {
      height: 8,
      width: 5,
    },
    shadowColor: colors.secondary,
    shadowRadius: 16,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  headerProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: colors.primary,
  },
  headerNameText: {
    color: colors.primary,
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  searchContainer: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    marginTop: moderateVerticalScale(15),
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
  },
  searchTextInput: {
    flex: 1,
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(10),
    color: colors.primary,
  },
  patientCard: {
    flexDirection: 'row',
    backgroundColor: '#F7F8F9',
    borderColor: '#E8ECF4',
    borderWidth: 1,
    borderRadius: moderateScale(12),
    marginBottom: moderateVerticalScale(15),
    paddingVertical: moderateVerticalScale(10),
    alignItems: 'flex-end',
  },
  nameText: {
    color: 'black',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  descText: {
    color: 'black',
    fontSize: moderateScale(12),
    marginTop: moderateVerticalScale(5),
  },
  cardContentContainer: {
    paddingHorizontal: moderateScale(15),
    flex: 1,
  },
  infectionContainer: {
    backgroundColor: 'red',
    paddingVertical: moderateVerticalScale(5),
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(10),
    borderTopLeftRadius: moderateScale(50),
    borderBottomLeftRadius: moderateScale(50),
  },
  infectionText: {
    color: 'white',
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
  sectionTitle: {
    fontSize: moderateScale(20),
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: moderateVerticalScale(15),
    paddingLeft: moderateScale(15),
  },
});
