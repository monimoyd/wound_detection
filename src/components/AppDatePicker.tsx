import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import AppText from './AppText';
import {ErrorIcon} from '../assets/svg';

interface Props {
  onPress: () => void;
  open: boolean | undefined;
  date: Date;
  mode?: 'date' | 'time' | 'datetime' | undefined;
  onConfirm?: ((date: Date) => void) | undefined;
  onCancel?: (() => void) | undefined;
  error?: string;
}

export default function AppDatePicker({
  onPress,
  open,
  date,
  mode,
  onConfirm,
  onCancel,
  error,
}: Props) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.dateContainer}>
        <AppText style={styles.datePickerText}>
          {moment(date).format('DD-MM-YYYY')}
        </AppText>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
      {error ? (
        <View style={styles.errorMsg}>
          <View style={styles.errorIconView}>{<ErrorIcon />}</View>
          <View style={styles.errorIconView}></View>
          <Text style={styles.text}>{error}</Text>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: '#F7F8F9',
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 12,
    width: '100%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(15),
  },
  datePickerText: {
    fontSize: moderateScale(14),
    color: '#000',
    paddingVertical: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(15),
  },
  errorMsg: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#FFBBC2',
    borderRadius: 5,
    marginTop: moderateScale(5),
  },
  text: {
    color: '#F44336',
    fontSize: 12,
    fontWeight: 'bold',
  },
  errorIconView: {
    paddingLeft: 10,
  },
});
