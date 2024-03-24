import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  patientCard: {
    flexDirection: 'row',
    backgroundColor: '#F7F8F9',
    borderColor: '#E8ECF4',
    borderWidth: 1,
    borderRadius: moderateScale(12),
    marginTop: moderateScale(15),
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
});
